import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { ACTIVE_THEME } from '../../../themes/active-theme';

type AnimationKey = 'rings' | 'party';

const EVENT_CARD_ANIMATIONS: Record<AnimationKey, object> = {
  rings: ACTIVE_THEME.animations.rings,
  party: ACTIVE_THEME.animations.party,
};

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() titulo!: string;
  @Input() animationKey!: AnimationKey;
  @Input() date = '';
  @Input() place = '';
  @Input() address = '';
  @Input() calendarRef = '';
  @Input() location = '';
  @Input() mapsUrl = '';
  options!: AnimationOptions;
  animationItem?: AnimationItem;

  ngOnInit(): void {
    this.options = {
      animationData: EVENT_CARD_ANIMATIONS[this.animationKey],
      loop: true,
      autoplay: true,
    };
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
