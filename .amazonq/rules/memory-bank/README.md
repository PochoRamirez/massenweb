# Angular Memory Bank

This memory bank contains comprehensive patterns and best practices for Angular v20+ development, focusing on modern features like signals, standalone components, and the latest APIs.

## Memory Bank Files

### Core Patterns
- **[angular-components.md](./angular-components.md)** - Component structure, inputs/outputs, and lifecycle patterns
- **[angular-signals.md](./angular-signals.md)** - Signal-based state management and reactive patterns
- **[angular-templates.md](./angular-templates.md)** - Template syntax, control flow, and binding patterns

### Architecture & Services
- **[angular-services.md](./angular-services.md)** - Service patterns, dependency injection, and communication
- **[angular-routing.md](./angular-routing.md)** - Routing configuration, guards, and navigation
- **[angular-forms.md](./angular-forms.md)** - Reactive forms, validation, and form handling

### Advanced Topics
- **[angular-performance.md](./angular-performance.md)** - Performance optimization and best practices
- **[angular-testing.md](./angular-testing.md)** - Testing patterns for components, services, and signals

## Key Principles

### Modern Angular Features
- **Signals**: Use for all state management and reactive programming
- **Standalone Components**: Default architecture pattern, no NgModules
- **Control Flow**: Use `@if`, `@for`, `@switch` instead of structural directives
- **inject()**: Preferred over constructor injection

### Performance First
- **OnPush Strategy**: Always use `ChangeDetectionStrategy.OnPush`
- **Lazy Loading**: Implement for all feature routes and heavy components
- **NgOptimizedImage**: Use for all static images
- **Virtual Scrolling**: For large lists and data sets

### Code Quality
- **TypeScript Strict Mode**: Enable strict type checking
- **Single Responsibility**: Keep components and services focused
- **Reactive Patterns**: Prefer signals and computed values
- **Clean Templates**: Minimize logic in templates

## Usage Guidelines

1. **Start with Signals**: Use signals for all component state
2. **Standalone First**: Create all components as standalone
3. **Performance by Default**: Always use OnPush change detection
4. **Test Everything**: Write tests for components, services, and business logic
5. **Follow Patterns**: Use the established patterns in this memory bank

## Quick Reference

```typescript
// Modern Angular Component Template
@Component({
  selector: 'app-example',
  template: `
    @if (isVisible()) {
      @for (item of items(); track item.id) {
        <div>{{ item.name }}</div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent {
  protected readonly items = signal<Item[]>([]);
  protected readonly isVisible = signal(true);
  
  private readonly service = inject(DataService);
}
```

This memory bank serves as the definitive guide for building modern, performant Angular applications using the latest framework features and best practices.