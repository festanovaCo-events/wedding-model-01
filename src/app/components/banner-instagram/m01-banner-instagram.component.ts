import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { PAGE_COPY } from '../../shared/constants/page-copy';
import { WEDDING_INFO } from '../../shared/constants/wedding-info';
import { ACTIVE_THEME } from '../../shared/themes/active-theme';
import { observeOnceVisible } from '../../shared/utils/observe-once-visible';

@Component({
  selector: 'app-m01-banner-instagram',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './m01-banner-instagram.component.html',
  styleUrl: './m01-banner-instagram.component.css'
})
export class M01BannerInstagramComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;
  
  private animationItem: AnimationItem | undefined;
  private observer: IntersectionObserver | null = null;
  pageCopy = PAGE_COPY;
  weddingInfo = WEDDING_INFO;
  shouldLoadAnimation = false;

  options: AnimationOptions = {
    animationData: ACTIVE_THEME.animations.instagram,
    loop: true,
    autoplay: true,
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.observer = observeOnceVisible(this.lottieContainer?.nativeElement, () => {
        this.shouldLoadAnimation = true;
      });
    }, 0);
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
