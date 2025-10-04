# Angular Signals Memory Bank

## Signal Patterns
```typescript
import { signal, computed, effect } from '@angular/core';

// Basic signal creation
const count = signal(0);
const name = signal('');
const items = signal<Item[]>([]);

// Signal updates - NEVER use mutate()
count.set(10);
count.update(current => current + 1);

// Array updates
items.update(current => [...current, newItem]);
items.update(current => current.filter(item => item.id !== targetId));

// Computed signals
const doubleCount = computed(() => count() * 2);
const filteredItems = computed(() => 
  items().filter(item => item.active)
);

// Effects for side effects
effect(() => {
  console.log('Count changed:', count());
});
```

## State Management Patterns
```typescript
// Service with signals
@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly _data = signal<Data[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  
  readonly data = this._data.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  
  readonly hasData = computed(() => this._data().length > 0);
  
  async loadData() {
    this._loading.set(true);
    this._error.set(null);
    
    try {
      const data = await this.fetchData();
      this._data.set(data);
    } catch (error) {
      this._error.set(error.message);
    } finally {
      this._loading.set(false);
    }
  }
}
```

## Key Rules
- Use `update()` or `set()` - NEVER `mutate()`
- Use `computed()` for derived state
- Use `asReadonly()` for public signal exposure
- Keep signal transformations pure and predictable