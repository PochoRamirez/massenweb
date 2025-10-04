import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  getQuote(productId: number) {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: 'Tablones de Roble Premium',
      type: 'Madera Dura',
      price: 'Desde $45/pie²',
      image: '#d2b48c',
      description: 'Hermosos tablones de roble perfectos para pisos y fabricación de muebles'
    },
    {
      id: 2,
      name: 'Madera de Cedro',
      type: 'Madera Blanda',
      price: 'Desde $28/pie²',
      image: '#deb887',
      description: 'Madera de cedro aromática ideal para proyectos exteriores y closets'
    },
    {
      id: 3,
      name: 'Tablas de Nogal',
      type: 'Madera Dura',
      price: 'Desde $65/pie²',
      image: '#cd853f',
      description: 'Rica madera de nogal con patrones de veta impresionantes para proyectos premium'
    },
    {
      id: 4,
      name: 'Pino para Construcción',
      type: 'Madera Blanda',
      price: 'Desde $18/pie²',
      image: '#f4e4bc',
      description: 'Madera de pino confiable para aplicaciones de construcción y enmarcado'
    }
  ]);
}