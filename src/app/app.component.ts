import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-features></app-features>
    <app-products></app-products>
    <app-contact></app-contact>
  `,
  imports: [HeaderComponent, HeroComponent, FeaturesComponent, ProductsComponent, ContactComponent]
})
export class AppComponent {}