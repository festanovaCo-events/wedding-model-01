import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {
  CONFIRMATION_STEP_DELAY_MS,
  CONFIRMATION_TOAST_CLOSE_DELAY_MS,
  CONFIRMATION_TOAST_OPTIONS,
} from '../../../constants/confirmation-flow';
import { PAGE_COPY } from '../../../constants/page-copy';
import { InvitationStateService } from '../../../services/invitation-state.service';
import { InvitationService } from '../../../services/invitation.service';
import { fillCopy } from '../../../utils/fill-copy';
import { partialQuotasMessage } from '../../../utils/partial-quotas-message';
import { ConfirmAlertComponent } from '../../common/confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-content-confirmation-modal',
  standalone: true,
  imports: [FormsModule, CommonModule, ConfirmAlertComponent],
  templateUrl: './content-confirmation-modal.component.html',
  styleUrl: './content-confirmation-modal.component.css',
})
export class ContentConfirmationModalComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<void>();
  copy = PAGE_COPY.rsvp;
  
  currentStep:
    | 'confirmation'
    | 'loading'
    | 'guests'
    | 'decline-confirmation'
    | 'partial-quotas-confirmation' = 'confirmation';
  isConfirmed: boolean | null = null;
  
  nameCurrent: string = '';
  listName: string[] = [];
  maximumQuotas = 0;
  registrationSent: boolean = false;
  hostName: string = '';
  private subscription?: Subscription;
  
  private token: string = '';

  get additionalGuests(): string[] {
    return this.listName.filter(name => name !== this.hostName);
  }

  get canAddMoreGuests(): boolean {
    return this.additionalGuests.length < (this.maximumQuotas - 1);
  }

  constructor(
    private invitationStateService: InvitationStateService,
    private invitationService: InvitationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscription = this.invitationStateService.getInvitationData$().subscribe(data => {
      if (data) {
        this.token = data.data.invitation.token || '';
        
        this.hostName = data.data.invitation.name || '';
        this.maximumQuotas = data.data.available_seats;
        
        if (this.hostName) {
          this.listName = [this.hostName];
        }
        
        if (data.data.invitation.guests && data.data.invitation.guests.length > 0) {
          const guestNames = data.data.invitation.guests.map(guest => guest.name);
          guestNames.forEach(guestName => {
            if (guestName !== this.hostName && !this.listName.includes(guestName)) {
              this.listName.push(guestName);
            }
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private reloadInvitationData(): void {
    if (!this.token) {
      console.warn('No hay token disponible para recargar la información');
      return;
    }

    this.invitationStateService.setLoading(true);
    this.invitationService.getInvitationInfo(this.token).subscribe({
      next: (response) => {
        this.invitationStateService.setInvitationData(response);
        this.invitationStateService.setLoading(false);
      },
      error: (error) => {
        console.error('Error al recargar datos de invitación:', error);
        this.invitationStateService.setLoading(false);
      }
    });
  }

  onConfirmChange() {
    if (this.isConfirmed === true) {
      this.currentStep = 'loading';
      
      setTimeout(() => {
        this.currentStep = 'guests';
      }, CONFIRMATION_STEP_DELAY_MS);
    } else if (this.isConfirmed === false) {
      this.currentStep = 'decline-confirmation';
    }
  }

  confirmDecline() {
    if (!this.token) {
      this.notify('error', PAGE_COPY.messages.toasts.missingInvitation);
      return;
    }

    this.currentStep = 'loading';

    this.invitationService.declineInvitation(this.token).subscribe({
      next: () => {
        this.reloadInvitationData();
        
        this.reset();
        this.closeModal.emit();
        
        setTimeout(() => {
          this.notify('info', PAGE_COPY.messages.toasts.declined);
        }, CONFIRMATION_TOAST_CLOSE_DELAY_MS);
      },
      error: (error) => {
        console.error('Error al rechazar la invitación:', error);
        this.currentStep = 'decline-confirmation';
        this.notify('error', PAGE_COPY.messages.toasts.declineFailed);
      }
    });
  }

  cancelDecline() {
    this.isConfirmed = null;
    this.currentStep = 'confirmation';
  }

  saveName() {
    const nombreTrim = this.nameCurrent.trim();
    if (
      nombreTrim &&
      this.canAddMoreGuests &&
      !this.listName.includes(nombreTrim) &&
      nombreTrim !== this.hostName
    ) {
      this.listName.push(nombreTrim);
      this.nameCurrent = '';
    }
  }

  deleteName(index: number) {
    const nombre = this.listName[index];
    if (nombre !== this.hostName) {
      this.listName.splice(index, 1);
    }
  }

  confirmSend() {
    if (this.listName.length < this.maximumQuotas) {
      this.currentStep = 'partial-quotas-confirmation';
      return;
    }

    this.send();
  }

  confirmPartialSend() {
    this.send();
  }

  cancelPartialSend() {
    this.currentStep = 'guests';
  }

  get partialQuotasMessage(): string {
    return partialQuotasMessage(this.listName.length, this.maximumQuotas);
  }

  get welcomeLabel(): string {
    return fillCopy(this.copy.welcome, { name: this.hostName });
  }

  get guestListLabel(): string {
    return fillCopy(this.copy.guestList, {
      count: this.listName.length,
      maximum: this.maximumQuotas,
    });
  }

  get maximumGuestsLabel(): string {
    return fillCopy(this.copy.maximumGuests, { maximum: this.maximumQuotas });
  }

  send() {
    if (!this.token) {
      this.notify('error', PAGE_COPY.messages.toasts.missingInvitation);
      return;
    }

    this.currentStep = 'loading';
    this.registrationSent = true;

    const guestNames = [...this.listName];

    this.invitationService.acceptInvitation(this.token, guestNames).subscribe({
      next: () => {
        this.reloadInvitationData();
        
        this.reset();
        this.closeModal.emit();
        
        setTimeout(() => {
          this.notify('success', PAGE_COPY.messages.toasts.accepted);
        }, CONFIRMATION_TOAST_CLOSE_DELAY_MS);
      },
      error: (error) => {
        console.error('Error al aceptar la invitación:', error);
        this.currentStep = 'guests';
        this.registrationSent = false;
        this.notify('error', PAGE_COPY.messages.toasts.acceptFailed);
      }
    });
  }

  reset() {
    this.currentStep = 'confirmation';
    this.isConfirmed = null;
    this.nameCurrent = '';
    this.listName = this.hostName ? [this.hostName] : [];
    this.registrationSent = false;
  }

  onClose() {
    this.reset();
    this.closeModal.emit();
  }

  private notify(kind: 'error' | 'info' | 'success', message: string): void {
    switch (kind) {
      case 'error':
        this.toastr.error(message, '', CONFIRMATION_TOAST_OPTIONS);
        return;
      case 'info':
        this.toastr.info(message, '', CONFIRMATION_TOAST_OPTIONS);
        return;
      case 'success':
        this.toastr.success(message, '', CONFIRMATION_TOAST_OPTIONS);
        return;
      default: {
        const exhaustive: never = kind;
        return exhaustive;
      }
    }
  }
}
