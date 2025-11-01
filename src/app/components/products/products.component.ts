import { Component, ChangeDetectionStrategy, signal, inject, computed, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

interface ProductSize {
  dimension: string;  // ej: "1x4"
  length: string;     // ej: "3 mts"
  price: string;      // ej: "$45/pie²"
}

interface ProductFeature {
  text: string;
  icon: string;
}

interface Product {
  id: number;
  name: string;
  type: string;
  category: string;
  image: string;
  description: string;
  features: ProductFeature[];
  sizes: ProductSize[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  private readonly http = inject(HttpClient);
  protected readonly languageService = inject(LanguageService);
  protected readonly activeFilter = signal('all');
  protected readonly products = signal<Product[]>([]);
  protected readonly expandedProducts = signal<Set<number>>(new Set());
  protected readonly loadError = signal(false);
  
  protected readonly filteredProducts = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.products();
    return this.products().filter(product => product.category === filter);
  });
  
  ngOnInit() {
    this.loadProducts();
  }
  
  private async loadProducts() {
    try {
      const data = await this.http.get<{products: Product[]}>('assets/products-data.json').toPromise();
      if (data?.products) {
        this.products.set(data.products);
        this.loadError.set(false);
      } else {
        this.loadFallbackProducts();
      }
    } catch (error) {
      console.error('Error loading products:', error);
      this.loadFallbackProducts();
    }
  }
  
  private parseCSV(csv: string): Product[] {
    // Para CSV necesitarías una estructura más compleja
    // Por ahora usar fallback hasta configurar Google Sheets correctamente
    console.log('CSV parsing not implemented for new structure, using fallback data');
    this.loadFallbackProducts();
    return this.products();
  }
  
  private loadFallbackProducts() {
    console.warn('Using empty fallback - all data should come from JSON file');
    this.products.set([]);
    this.loadError.set(true);
  }
  
  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
  
  getQuote(productId: number) {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  
  toggleSizes(productId: number) {
    const expanded = this.expandedProducts();
    const newExpanded = new Set(expanded);
    
    if (expanded.has(productId)) {
      newExpanded.delete(productId);
    } else {
      newExpanded.add(productId);
    }
    
    this.expandedProducts.set(newExpanded);
  }
  
  isExpanded(productId: number): boolean {
    return this.expandedProducts().has(productId);
  }
  
  getVisibleSizes(product: Product) {
    const maxVisible = 3;
    if (this.isExpanded(product.id) || product.sizes.length <= maxVisible) {
      return product.sizes;
    }
    return product.sizes.slice(0, maxVisible);
  }
  
  hasMoreSizes(product: Product): boolean {
    return product.sizes.length > 3;
  }
  
  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/logo.jpg';
  }
}