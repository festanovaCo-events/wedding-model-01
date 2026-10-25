import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-couple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-couple.component.html',
  styleUrl: './title-couple.component.css',
})
export class TitleCoupleComponent {
  @Input() name_wife = '';
  @Input() name_husband = '';
  @Input() classHeading1 =
    'text-white text-100 md:text-130 font-bold flex-col md:flex-row gap-3 md:gap-7';
  @Input() classSpan =
    'text-couple-separator text-40 w-12.5 h-12.5 md:w-15 md:h-15 leading-12.5 md:leading-15';
}
