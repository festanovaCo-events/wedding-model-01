import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGE_COPY } from '../../../constants/page-copy';

@Component({
  selector: 'app-m01-declined-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m01-declined-status.component.html',
  styleUrl: './m01-declined-status.component.css',
})
export class M01DeclinedStatusComponent {
  pageCopy = PAGE_COPY;
}
