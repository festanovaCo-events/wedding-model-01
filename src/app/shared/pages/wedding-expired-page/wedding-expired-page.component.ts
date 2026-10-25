import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { M01ExpiredBannerComponent } from '../../components/expired-banner/m01-expired-banner.component';
import { M01InvitationCardComponent } from '../../components/invitation-card/m01-invitation-card.component';
import { INVITATION_QUERY } from '../../constants/invitation-query';
import { PAGE_COPY } from '../../constants/page-copy';
import { WEDDING_INFO } from '../../constants/wedding-info';
import { InvitationService } from '../../services/invitation.service';
import { InvitationStateService } from '../../services/invitation-state.service';
import { shouldShowExpiredInvitationPage } from '../../utils/confirmation-deadline';
import { invitationPageUrl } from '../../utils/invitation-url';

@Component({
  selector: 'app-wedding-expired-page',
  standalone: true,
  imports: [CommonModule, M01ExpiredBannerComponent, M01InvitationCardComponent],
  templateUrl: './wedding-expired-page.component.html',
  styleUrl: './wedding-expired-page.component.css',
})
export class WeddingExpiredPageComponent implements OnInit, OnDestroy {
  pageCopy = PAGE_COPY;
  weddingInfo = WEDDING_INFO;
  inviteeName: string = PAGE_COPY.messages.fallbackInviteeName;
  invitationUrl = '';
  private routeSubscription?: Subscription;
  private invitationSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invitationService: InvitationService,
    private invitationStateService: InvitationStateService
  ) {}

  get coupleName(): string {
    return this.weddingInfo.couple.fullName;
  }

  get deadline(): string {
    return this.weddingInfo.confirmation.deadlineLabel;
  }

  ngOnInit(): void {
    this.invitationSubscription = this.invitationStateService
      .getInvitationData$()
      .subscribe((data) => {
        const invitation = data?.data.invitation;
        if (invitation?.name) {
          this.rememberInvitee(invitation.name);
        }

        if (invitation && !shouldShowExpiredInvitationPage(invitation.status)) {
          void this.router.navigate(['/'], {
            queryParamsHandling: 'preserve',
            replaceUrl: true,
          });
        }
      });

    this.routeSubscription = this.route.queryParams.subscribe((params) => {
      const token = params[INVITATION_QUERY.token] as string | undefined;

      if (token) {
        this.invitationUrl = invitationPageUrl(window.location.origin, token);
        this.loadInvitation(token);
        return;
      }

      const existing = this.invitationStateService.getInvitationData();
      const existingToken = existing?.data.invitation.token;
      if (existingToken) {
        this.invitationUrl = invitationPageUrl(window.location.origin, existingToken);
        if (existing?.data.invitation.name) {
          this.rememberInvitee(existing.data.invitation.name);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.invitationSubscription?.unsubscribe();
  }

  private rememberInvitee(name: string): void {
    this.inviteeName = name.split(' ')[0];
  }

  private loadInvitation(token: string): void {
    const existing = this.invitationStateService.getInvitationData();
    if (existing?.data.invitation.token === token) {
      return;
    }

    this.invitationStateService.setLoading(true);
    this.invitationService.getInvitationInfo(token).subscribe({
      next: (response) => {
        this.invitationStateService.setInvitationData(response);
        this.invitationStateService.setLoading(false);
      },
      error: () => {
        this.invitationStateService.setError(PAGE_COPY.messages.loadError);
        this.invitationStateService.setLoading(false);
      },
    });
  }
}
