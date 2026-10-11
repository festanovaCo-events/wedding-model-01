import { TestBed } from '@angular/core/testing';
import { InvitationInfoResponse } from '../interfaces/invitation.interface';
import { InvitationStateService } from './invitation-state.service';

function invitationWithStatus(
  status: InvitationInfoResponse['data']['invitation']['status'],
): InvitationInfoResponse {
  return {
    success: true,
    data: {
      available_seats: 2,
      used_seats: 0,
      total_seats: 2,
      invitation: {
        id: 'invitation-1',
        name: 'Ana Pérez',
        status,
        seats_reserved: 2,
        guests: [],
        token: 'token-1',
      },
    },
  };
}

describe('InvitationStateService', () => {
  let service: InvitationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationStateService);
  });

  it('no marca confirmada ni rechazada cuando todavía no hay invitación', () => {
    expect(service.isConfirmed()).toBeFalse();
    expect(service.isDeclined()).toBeFalse();
  });

  it('usa ACCEPTED como único criterio de confirmada', () => {
    service.setInvitationData(invitationWithStatus('ACCEPTED'));

    expect(service.isConfirmed()).toBeTrue();
    expect(service.isDeclined()).toBeFalse();
  });

  it('usa DECLINED como único criterio de rechazada', () => {
    service.setInvitationData(invitationWithStatus('DECLINED'));

    expect(service.isConfirmed()).toBeFalse();
    expect(service.isDeclined()).toBeTrue();
  });
});
