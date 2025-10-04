import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  scrollToProducts() {
    const element = document.querySelector('#products');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  
  scrollToContact() {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}