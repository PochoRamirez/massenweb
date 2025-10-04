# Angular Templates Memory Bank

## Control Flow Patterns
```html
<!-- Use @if instead of *ngIf -->
@if (isVisible()) {
  <div>Content is visible</div>
} @else if (isLoading()) {
  <div>Loading...</div>
} @else {
  <div>No content</div>
}

<!-- Use @for instead of *ngFor -->
@for (item of items(); track item.id) {
  <div class="item">{{ item.name }}</div>
} @empty {
  <div>No items found</div>
}

<!-- Use @switch instead of *ngSwitch -->
@switch (status()) {
  @case ('loading') {
    <div>Loading...</div>
  }
  @case ('success') {
    <div>Success!</div>
  }
  @default {
    <div>Unknown status</div>
  }
}
```

## Binding Patterns
```html
<!-- Class bindings - NO ngClass -->
<div [class.active]="isActive()" 
     [class.disabled]="isDisabled()">
  Content
</div>

<!-- Style bindings - NO ngStyle -->
<div [style.color]="textColor()"
     [style.font-size.px]="fontSize()">
  Styled content
</div>

<!-- Event binding -->
<button (click)="handleClick($event)"
        (keydown.enter)="handleEnter()">
  Click me
</button>

<!-- Two-way binding with signals -->
<input [value]="searchTerm()" 
       (input)="searchTerm.set($event.target.value)">
```

## Template Best Practices
```html
<!-- Keep templates simple -->
<div class="container">
  @if (user(); as currentUser) {
    <h1>Welcome, {{ currentUser.name }}</h1>
    <p>{{ formatUserRole(currentUser.role) }}</p>
  }
</div>

<!-- Use trackBy for performance -->
@for (item of largeList(); track item.id) {
  <app-item [data]="item" (selected)="onItemSelected($event)"></app-item>
}

<!-- Async pipe for observables -->
<div>
  {{ (data$ | async)?.title }}
</div>
```

## Key Rules
- Use native control flow (`@if`, `@for`, `@switch`)
- Use direct class/style bindings instead of `ngClass`/`ngStyle`
- Keep template logic minimal
- Always use track functions with `@for`