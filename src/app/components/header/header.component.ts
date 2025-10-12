import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [LanguageSwitcherComponent],
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly languageService = inject(LanguageService);
  
  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }
}