import { WEDDING_INFO } from '../constants/wedding-info';
import {
  isConfirmationDeadlinePassed,
  shouldRedirectToExpiredInvitation,
  shouldShowExpiredInvitationPage,
} from './confirmation-deadline';

const beforeDeadline = new Date('2026-11-20T12:00:00');
const afterDeadline = new Date('2026-11-21T00:00:00');

describe('confirmation deadline', () => {
  it('trata el plazo como vencido solo después de la fecha de WEDDING_INFO', () => {
    expect(isConfirmationDeadlinePassed(beforeDeadline)).toBeFalse();
    expect(isConfirmationDeadlinePassed(new Date(WEDDING_INFO.confirmation.deadline))).toBeFalse();
    expect(isConfirmationDeadlinePassed(afterDeadline)).toBeTrue();
  });

  it('muestra la página de expiración a pendientes y rechazadas cuando el plazo ya pasó', () => {
    expect(shouldShowExpiredInvitationPage('PENDING', afterDeadline)).toBeTrue();
    expect(shouldShowExpiredInvitationPage('DECLINED', afterDeadline)).toBeTrue();
    expect(shouldShowExpiredInvitationPage('ACCEPTED', afterDeadline)).toBeFalse();
    expect(shouldShowExpiredInvitationPage('PENDING', beforeDeadline)).toBeFalse();
    expect(shouldShowExpiredInvitationPage(undefined, afterDeadline)).toBeFalse();
  });

  it('no redirige a /expired en vista previa aunque el plazo haya pasado', () => {
    expect(shouldRedirectToExpiredInvitation('PENDING', true, afterDeadline)).toBeFalse();
    expect(shouldRedirectToExpiredInvitation('DECLINED', true, afterDeadline)).toBeFalse();
    expect(shouldRedirectToExpiredInvitation('PENDING', false, afterDeadline)).toBeTrue();
    expect(shouldRedirectToExpiredInvitation('ACCEPTED', false, afterDeadline)).toBeFalse();
    expect(shouldRedirectToExpiredInvitation('PENDING', false, beforeDeadline)).toBeFalse();
  });
});
