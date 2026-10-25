import { Component } from '@angular/core';
import { PAGE_COPY } from '../../../constants/page-copy';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  pageCopy = PAGE_COPY;
}
