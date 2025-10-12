import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  protected readonly languageService = inject(LanguageService);
  
  scrollToProducts() {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  
  scrollToContact() {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}