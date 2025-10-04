# Angular Performance Memory Bank

## OnPush Change Detection
```typescript
@Component({
  selector: 'app-optimized',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (item of items(); track item.id) {
      <app-item [data]="item" (updated)="onItemUpdated($event)"></app-item>
    }
  `
})
export class OptimizedComponent {
  // Use signals for automatic change detection optimization
  protected readonly items = signal<Item[]>([]);
  
  onItemUpdated(updatedItem: Item) {
    this.items.update(current => 
      current.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  }
}
```

## Lazy Loading Patterns
```typescript
// Lazy load components
const routes: Routes = [
  {
    path: 'feature',
    loadComponent: () => import('./feature/feature.component').then(c => c.FeatureComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(r => r.adminRoutes),
    canMatch: [adminGuard]
  }
];

// Lazy load services
@Component({
  selector: 'app-feature'
})
export class FeatureComponent {
  private readonly heavyService = inject(HeavyService, { optional: true });
  
  async loadHeavyFeature() {
    if (!this.heavyService) {
      const { HeavyService } = await import('./heavy.service');
      // Use the service
    }
  }
}
```

## Image Optimization
```typescript
@Component({
  selector: 'app-gallery',
  template: `
    <img [ngSrc]="imageUrl()" 
         [alt]="imageAlt()"
         width="400" 
         height="300"
         priority="high"
         [placeholder]="placeholderUrl()">
  `,
  imports: [NgOptimizedImage]
})
export class GalleryComponent {
  protected readonly imageUrl = signal('assets/hero-image.jpg');
  protected readonly imageAlt = signal('Hero image');
  protected readonly placeholderUrl = signal('data:image/svg+xml;base64,...');
}
```

## Virtual Scrolling
```typescript
@Component({
  selector: 'app-large-list',
  template: `
    <cdk-virtual-scroll-viewport itemSize="50" class="viewport">
      @for (item of items(); track item.id) {
        <div class="item">{{ item.name }}</div>
      }
    </cdk-virtual-scroll-viewport>
  `,
  imports: [CdkVirtualScrollViewport, CdkVirtualForOf],
  styles: [`
    .viewport {
      height: 400px;
    }
    .item {
      height: 50px;
      display: flex;
      align-items: center;
    }
  `]
})
export class LargeListComponent {
  protected readonly items = signal<Item[]>([]);
}
```

## Memoization with Computed
```typescript
@Component({
  selector: 'app-expensive-calc'
})
export class ExpensiveCalcComponent {
  protected readonly data = signal<number[]>([]);
  protected readonly filter = signal('');
  
  // Expensive computation is memoized
  protected readonly processedData = computed(() => {
    const rawData = this.data();
    const filterValue = this.filter();
    
    return rawData
      .filter(item => item.toString().includes(filterValue))
      .map(item => this.expensiveTransform(item))
      .sort((a, b) => a - b);
  });
  
  private expensiveTransform(value: number): number {
    // Expensive computation here
    return value * Math.random();
  }
}
```

## Bundle Optimization
```typescript
// Use dynamic imports for large libraries
async loadChart() {
  const { Chart } = await import('chart.js');
  // Use Chart.js only when needed
}

// Tree-shake unused RxJS operators
import { map, filter, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

// Avoid importing entire libraries
import { debounce } from 'lodash-es'; // Good
// import _ from 'lodash'; // Bad - imports entire library
```

## Key Performance Rules
- Always use `ChangeDetectionStrategy.OnPush`
- Use `NgOptimizedImage` for all images
- Implement lazy loading for routes and heavy features
- Use virtual scrolling for large lists
- Leverage computed signals for expensive calculations
- Use track functions with `@for` loops
- Minimize bundle size with dynamic imports