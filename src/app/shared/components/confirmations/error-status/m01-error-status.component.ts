import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGE_COPY } from '../../../constants/page-copy';

@Component({
  selector: 'app-m01-error-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m01-error-status.component.html',
  styleUrl: './m01-error-status.component.css',
})
export class M01ErrorStatusComponent {
  @Input() error: string | null = null;
  pageCopy = PAGE_COPY;
}
