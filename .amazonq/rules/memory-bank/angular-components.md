# Angular Components Memory Bank

## Component Structure Pattern
```typescript
import { ChangeDetectionStrategy, Component, signal, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <div class="container">
      @if (isVisible()) {
        <h1>{{ title() }}</h1>
        @for (item of items(); track item.id) {
          <div>{{ item.name }}</div>
        }
      }
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-direction: column;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  // Inputs using signal-based API
  title = input.required<string>();
  items = input<Item[]>([]);
  
  // Outputs using signal-based API
  itemSelected = output<Item>();
  
  // Local state with signals
  protected readonly isVisible = signal(true);
  protected readonly selectedIndex = signal(0);
  
  // Computed values
  protected readonly selectedItem = computed(() => 
    this.items()[this.selectedIndex()] || null
  );
  
  // Methods
  toggleVisibility() {
    this.isVisible.update(visible => !visible);
  }
  
  selectItem(item: Item) {
    this.itemSelected.emit(item);
  }
}
```

## Key Patterns
- Always use `ChangeDetectionStrategy.OnPush`
- Use `input()` and `output()` functions instead of decorators
- Use signals for local state management
- Use `computed()` for derived state
- Use native control flow (`@if`, `@for`, `@switch`)
- Avoid `ngClass` and `ngStyle` - use direct bindings instead