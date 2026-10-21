import { WEDDING_INFO } from '../constants/wedding-info';
import { InvitationStatus } from '../interfaces/invitation.interface';

export function isConfirmationDeadlinePassed(
  referenceDate: Date = new Date(),
): boolean {
  return (
    referenceDate.getTime() >
    new Date(WEDDING_INFO.confirmation.deadline).getTime()
  );
}

export function shouldShowExpiredInvitationPage(
  status: InvitationStatus | undefined,
  referenceDate: Date = new Date(),
): boolean {
  const deadlinePassed = isConfirmationDeadlinePassed(referenceDate);
  return (
    (status === 'DECLINED' && deadlinePassed) ||
    (status === 'PENDING' && deadlinePassed)
  );
}

export function shouldRedirectToExpiredInvitation(
  status: InvitationStatus | undefined,
  isPreviewMode: boolean,
  referenceDate: Date = new Date(),
): boolean {
  if (isPreviewMode) {
    return false;
  }

  return shouldShowExpiredInvitationPage(status, referenceDate);
}
