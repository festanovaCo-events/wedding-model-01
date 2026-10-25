import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PAGE_COPY } from '../../constants/page-copy';
import { withPreviewQuery } from '../../utils/invitation-url';

@Component({
  selector: 'app-m01-invitation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m01-invitation-card.component.html',
  styleUrl: './m01-invitation-card.component.css',
})
export class M01InvitationCardComponent implements OnChanges {
  @Input() invitationUrl = '';
  pageCopy = PAGE_COPY;

  isOpen = false;
  iframeInteractive = false;
  safeIframeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.safeIframeUrl = this.invitationUrl
      ? this.sanitizer.bypassSecurityTrustResourceUrl(this.previewUrl)
      : null;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.iframeInteractive = false;
    }
  }

  enableIframeInteraction(): void {
    this.iframeInteractive = true;
  }

  get openInNewTabUrl(): string {
    return this.previewUrl;
  }

  private get previewUrl(): string {
    return withPreviewQuery(this.invitationUrl, window.location.origin);
  }
}
