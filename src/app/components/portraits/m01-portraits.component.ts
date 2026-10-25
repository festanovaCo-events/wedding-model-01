import { Component, OnDestroy, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Fancybox } from '@fancyapps/ui';
import { PAGE_COPY } from '../../shared/constants/page-copy';
import { WEDDING_INFO } from '../../shared/constants/wedding-info';
import { ScriptLoaderService } from '../../shared/services/script-loader.service';
import { ACTIVE_THEME } from '../../shared/themes/active-theme';
import { fillCopy } from '../../shared/utils/fill-copy';
import { observeOnceVisible } from '../../shared/utils/observe-once-visible';

@Component({
  selector: 'app-m01-portraits',
  standalone: true,
  imports: [LottieComponent, CommonModule, SlickCarouselModule, NgOptimizedImage],
  templateUrl: './m01-portraits.component.html',
  styleUrl: './m01-portraits.component.css',
})
export class M01PortraitsComponent implements OnInit, OnDestroy {
  @ViewChild('lottieContainer', { static: false }) lottieContainer!: ElementRef;

  pageCopy = PAGE_COPY;
  images = WEDDING_INFO.assets.portraits;
  private observer: IntersectionObserver | null = null;
  shouldLoadAnimation = false;
  carouselReady = false;

  options: AnimationOptions = {
    animationData: ACTIVE_THEME.animations.camera,
    loop: true,
    autoplay: true,
  };

  animationItem: AnimationItem | undefined;

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  constructor(private scriptLoader: ScriptLoaderService) {}

  ngOnInit(): void {
    this.scriptLoader.loadSlickCarouselDeps().then(() => {
      this.carouselReady = true;
      setTimeout(() => this.bindFancybox(), 0);
    });
    setTimeout(() => {
      this.observer = observeOnceVisible(this.lottieContainer?.nativeElement, () => {
        this.shouldLoadAnimation = true;
      });
    }, 0);
  }

  private bindFancybox(): void {
    Fancybox.bind('.slick-slide:not(.slick-cloned) [data-fancybox="gallery"]', {
      Thumbs: {},
      Hash: false,
      on: {
        close: () => {
          if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        },
      },
    });
  }

  portraitAlt(index: number): string {
    return fillCopy(this.pageCopy.portraits.alt, {
      index: index + 1,
      total: this.images.length,
    });
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
