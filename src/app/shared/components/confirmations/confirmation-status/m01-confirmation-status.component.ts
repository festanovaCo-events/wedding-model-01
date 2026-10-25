import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGE_COPY } from '../../../constants/page-copy';
import { InvitationInfoResponse } from '../../../interfaces/invitation.interface';

@Component({
  selector: 'app-m01-confirmation-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m01-confirmation-status.component.html',
  styleUrl: './m01-confirmation-status.component.css',
})
export class M01ConfirmationStatusComponent {
  @Input() invitationData: InvitationInfoResponse | null = null;
  pageCopy = PAGE_COPY;

  get confirmedGuestNames(): string[] {
    if (!this.invitationData) {
      return [];
    }

    const { invitation } = this.invitationData.data;

    if (invitation.guests?.length > 0) {
      return invitation.guests.map(guest => guest.name);
    }

    return invitation.name ? [invitation.name] : [];
  }
}
