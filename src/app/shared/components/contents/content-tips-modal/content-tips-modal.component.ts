import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGE_COPY } from '../../../constants/page-copy';

@Component({
  selector: 'app-content-tips-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-tips-modal.component.html',
  styleUrl: './content-tips-modal.component.css',
})
export class ContentTipsModalComponent {
  tipsContent = PAGE_COPY.modals.tipsAndNotes.description;
}
