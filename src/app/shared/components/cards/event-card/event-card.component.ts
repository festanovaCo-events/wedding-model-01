import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { PAGE_COPY } from '../../../constants/page-copy';
import { AnimationKey } from '../../../interfaces/event-card.interface';
import { eventCardAnimation } from '../../../utils/event-card-animation';
import { eventMapsHref } from '../../../utils/maps-href';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent implements OnInit {
  @Input() titulo!: string;
  @Input() animationKey!: AnimationKey;
  @Input() date = '';
  @Input() place = '';
  @Input() address = '';
  @Input() calendarRef = '';
  @Input() location = '';
  @Input() mapsUrl = '';
  labels = PAGE_COPY.events;
  options!: AnimationOptions;
  animationItem?: AnimationItem;

  ngOnInit(): void {
    this.options = {
      animationData: eventCardAnimation(this.animationKey),
      loop: true,
      autoplay: true,
    };
  }

  get mapsHref(): string {
    return eventMapsHref(this.mapsUrl, this.location);
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
