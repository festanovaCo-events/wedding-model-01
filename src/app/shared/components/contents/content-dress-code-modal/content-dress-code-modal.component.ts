import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGE_COPY } from '../../../constants/page-copy';

@Component({
  selector: 'app-content-dress-code-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-dress-code-modal.component.html',
  styleUrl: './content-dress-code-modal.component.css',
})
export class ContentDressCodeModalComponent {
  dressCodeContent = PAGE_COPY.modals.dressCode.description;
}
