import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-products></app-products>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
  imports: [HeaderComponent, HeroComponent, FeaturesComponent, ProductsComponent, ContactComponent, FooterComponent]
})
export class AppComponent {}