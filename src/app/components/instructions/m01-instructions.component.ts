import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { PAGE_COPY } from '../../shared/constants/page-copy';
import { ACTIVE_THEME } from '../../shared/themes/active-theme';
import { CircularModalComponent } from '../../shared/components/common/circular-modal/circular-modal.component';
import { ContentDressCodeModalComponent } from '../../shared/components/contents/content-dress-code-modal/content-dress-code-modal.component';
import { ContentTipsModalComponent } from '../../shared/components/contents/content-tips-modal/content-tips-modal.component';
import {
  InstructionCard,
  visibleInstructionCards,
} from '../../shared/utils/instruction-cards';

@Component({
  selector: 'app-m01-instructions',
  standalone: true,
  imports: [
    LottieComponent,
    CommonModule,
    CircularModalComponent,
    ContentDressCodeModalComponent,
    ContentTipsModalComponent,
  ],
  templateUrl: './m01-instructions.component.html',
  styleUrl: './m01-instructions.component.css',
})
export class M01InstructionsComponent {
  pageCopy = PAGE_COPY;
  theme = ACTIVE_THEME;
  cards = visibleInstructionCards();
  showDressCodeModal = false;
  showTipsModal = false;

  onCardClick(card: InstructionCard): void {
    switch (card.id) {
      case 'dress':
        this.showDressCodeModal = true;
        return;
      case 'tips':
        this.showTipsModal = true;
        return;
      case 'music':
        return;
      default: {
        const exhaustive: never = card;
        return exhaustive;
      }
    }
  }

  closeDressCodeModal(): void {
    this.showDressCodeModal = false;
  }

  closeTipsModal(): void {
    this.showTipsModal = false;
  }
}
