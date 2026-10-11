import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  InvitationInfoResponse,
  InvitationStatus,
} from '../interfaces/invitation.interface';

@Injectable({ providedIn: 'root' })
export class InvitationStateService {
  private invitationData$ = new BehaviorSubject<InvitationInfoResponse | null>(null);
  private loading$ = new BehaviorSubject<boolean>(false);
  private error$ = new BehaviorSubject<string | null>(null);

  getInvitationData$(): Observable<InvitationInfoResponse | null> {
    return this.invitationData$.asObservable();
  }

  getLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  getError$(): Observable<string | null> {
    return this.error$.asObservable();
  }

  getInvitationData(): InvitationInfoResponse | null {
    return this.invitationData$.value;
  }

  setInvitationData(data: InvitationInfoResponse | null): void {
    this.invitationData$.next(data);
  }

  setLoading(loading: boolean): void {
    this.loading$.next(loading);
  }

  setError(error: string | null): void {
    this.error$.next(error);
  }

  getError(): string | null {
    return this.error$.value;
  }

  isConfirmed(): boolean {
    return this.invitationStatus() === 'ACCEPTED';
  }

  isDeclined(): boolean {
    return this.invitationStatus() === 'DECLINED';
  }

  getEventId(): string | null {
    return this.invitationData$.value?.data.invitation.event_id || null;
  }

  getToken(): string | null {
    return this.invitationData$.value?.data.invitation.token || null;
  }

  private invitationStatus(): InvitationStatus | undefined {
    return this.invitationData$.value?.data.invitation.status;
  }
}
