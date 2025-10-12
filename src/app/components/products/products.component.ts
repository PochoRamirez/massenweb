import { Component, ChangeDetectionStrategy, signal, inject, computed, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

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
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  private readonly http = inject(HttpClient);
  protected readonly languageService = inject(LanguageService);
  protected readonly activeFilter = signal('all');
  protected readonly products = signal<Product[]>([]);
  
  protected readonly filteredProducts = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.products();
    return this.products().filter(product => 
      filter === 'hardwood' ? product.type === 'Madera Dura' : product.type === 'Madera Blanda'
    );
  });
  
  ngOnInit() {
    this.loadProducts();
  }
  
  private async loadProducts() {
    try {
      // URL de Google Sheets publicada como CSV
      const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFMXoGRQ1N7JB9jZgSfZJCLX0REp7QFY15xvrtuHtjrcb4TYYbpOM6gEAwsROSJ-N3Up5ncufXt-Tp/pub?gid=0&single=true&output=csv';
      
      const response = await this.http.get(sheetUrl, { responseType: 'text' }).toPromise();
      if (response) {
        const products = this.parseCSV(response);
        this.products.set(products);
      }
    } catch (error) {
      console.error('Error loading products from Google Sheets:', error);
      // Fallback a datos locales
      this.loadFallbackProducts();
    }
  }
  
  private parseCSV(csv: string): Product[] {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const products: Product[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      if (values.length >= 6) {
        products.push({
          id: parseInt(values[0]) || i,
          name: values[1]?.replace(/"/g, '') || '',
          type: values[2]?.replace(/"/g, '') || '',
          price: values[3]?.replace(/"/g, '') || '',
          image: values[4]?.replace(/"/g, '') || '#d2b48c',
          description: values[5]?.replace(/"/g, '') || ''
        });
      }
    }
    return products;
  }
  
  private loadFallbackProducts() {
    this.products.set([
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
  
  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
  
  getQuote(productId: number) {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}