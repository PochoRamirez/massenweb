import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  template: `
    <div class="language-switcher">
      <button 
        class="lang-btn" 
        [class.active]="languageService.currentLanguage() === 'es'"
        (click)="languageService.setLanguage('es')">
        ES
      </button>
      <button 
        class="lang-btn" 
        [class.active]="languageService.currentLanguage() === 'en'"
        (click)="languageService.setLanguage('en')">
        EN
      </button>
    </div>
  `,
  styleUrl: './language-switcher.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  protected readonly languageService = inject(LanguageService);
}