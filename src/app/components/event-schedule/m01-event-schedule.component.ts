import { Component } from '@angular/core';
import { EventCardComponent } from '../../shared/components/cards/event-card/event-card.component';
import { PAGE_COPY } from '../../shared/constants/page-copy';
import { WEDDING_INFO } from '../../shared/constants/wedding-info';

@Component({
  selector: 'app-m01-event-schedule',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './m01-event-schedule.component.html',
  styleUrl: './m01-event-schedule.component.css',
})

export class M01EventScheduleComponent {
  pageCopy = PAGE_COPY;
  weddingInfo = WEDDING_INFO;
}
