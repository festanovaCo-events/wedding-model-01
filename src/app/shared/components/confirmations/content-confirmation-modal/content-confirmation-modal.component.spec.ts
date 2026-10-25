/// <reference types="jasmine" />
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { InvitationInfoResponse } from '../../../interfaces/invitation.interface';
import { InvitationService } from '../../../services/invitation.service';
import { InvitationStateService } from '../../../services/invitation-state.service';
import { CONFIRMATION_STEP_DELAY_MS } from '../../../constants/confirmation-flow';
import { ContentConfirmationModalComponent } from './content-confirmation-modal.component';

function invitationWithSeats(availableSeats: number): InvitationInfoResponse {
  return {
    success: true,
    data: {
      available_seats: availableSeats,
      used_seats: 0,
      total_seats: availableSeats,
      invitation: {
        id: 'invitation-1',
        name: 'Ana Pérez',
        status: 'PENDING',
        seats_reserved: availableSeats,
        guests: [],
        token: 'token-1',
      },
    },
  };
}

describe('ContentConfirmationModalComponent', () => {
  let fixture: ComponentFixture<ContentConfirmationModalComponent>;
  let component: ContentConfirmationModalComponent;
  let invitationState: InvitationStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentConfirmationModalComponent],
      providers: [
        InvitationStateService,
        {
          provide: InvitationService,
          useValue: jasmine.createSpyObj('InvitationService', [
            'getInvitationInfo',
            'acceptInvitation',
            'declineInvitation',
          ]),
        },
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['error', 'info', 'success']),
        },
      ],
    }).compileComponents();

    invitationState = TestBed.inject(InvitationStateService);
    fixture = TestBed.createComponent(ContentConfirmationModalComponent);
    component = fixture.componentInstance;
  });

  it('toma el tope de cupos de available_seats, también cuando es 0', () => {
    invitationState.setInvitationData(invitationWithSeats(0));
    fixture.detectChanges();

    expect(component.maximumQuotas).toBe(0);
    expect(component.partialQuotasMessage).toBe('Solo estás registrando 1 de 0 cupos.');
  });

  it('no inventa un tope de 7 cuando la invitación trae sus cupos', () => {
    invitationState.setInvitationData(invitationWithSeats(3));
    fixture.detectChanges();

    expect(component.maximumQuotas).toBe(3);
  });

  it('pasa a acompañantes al confirmar asistencia y a rechazo al declinar', fakeAsync(() => {
    invitationState.setInvitationData(invitationWithSeats(2));
    fixture.detectChanges();

    component.isConfirmed = true;
    component.onConfirmChange();
    expect(component.currentStep).toBe('loading');

    tick(CONFIRMATION_STEP_DELAY_MS);
    expect(component.currentStep).toBe('guests');

    component.isConfirmed = false;
    component.onConfirmChange();
    expect(component.currentStep).toBe('decline-confirmation');
  }));
});
