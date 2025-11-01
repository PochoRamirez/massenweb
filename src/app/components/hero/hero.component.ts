import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  protected readonly languageService = inject(LanguageService);
  
  scrollToProducts() {
    setTimeout(() => {
      const element = document.querySelector('#products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
  
  scrollToContact() {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}