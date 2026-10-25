import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { PAGE_COPY } from '../../shared/constants/page-copy';
import { ACTIVE_THEME } from '../../shared/themes/active-theme';
import { observeOnceVisible } from '../../shared/utils/observe-once-visible';

@Component({
  selector: 'app-m01-gifts',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './m01-gifts.component.html',
  styleUrl: './m01-gifts.component.css',
})
export class M01GiftsComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;
  
  private animationItem: AnimationItem | undefined;
  private observer: IntersectionObserver | null = null;
  pageCopy = PAGE_COPY;
  shouldLoadAnimation = false;

  options: AnimationOptions = {
    animationData: ACTIVE_THEME.animations.gift,
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
