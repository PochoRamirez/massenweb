# Angular Services Memory Bank

## Service Structure Pattern
```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  
  private readonly _users = signal<User[]>([]);
  private readonly _loading = signal(false);
  
  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly userCount = computed(() => this._users().length);
  
  async loadUsers() {
    this._loading.set(true);
    try {
      const users = await this.http.get<User[]>('/api/users').toPromise();
      this._users.set(users);
    } finally {
      this._loading.set(false);
    }
  }
  
  addUser(user: User) {
    this._users.update(current => [...current, user]);
  }
  
  removeUser(id: string) {
    this._users.update(current => current.filter(u => u.id !== id));
  }
}
```

## Dependency Injection Pattern
```typescript
// Use inject() function instead of constructor injection
@Component({
  selector: 'app-example'
})
export class ExampleComponent {
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  
  // Component logic here
}
```

## Service Communication Pattern
```typescript
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly _notifications = signal<Notification[]>([]);
  
  readonly notifications = this._notifications.asReadonly();
  readonly hasNotifications = computed(() => this._notifications().length > 0);
  
  addNotification(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const notification: Notification = {
      id: crypto.randomUUID(),
      message,
      type,
      timestamp: new Date()
    };
    
    this._notifications.update(current => [...current, notification]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => this.removeNotification(notification.id), 5000);
  }
  
  removeNotification(id: string) {
    this._notifications.update(current => 
      current.filter(n => n.id !== id)
    );
  }
  
  clearAll() {
    this._notifications.set([]);
  }
}
```

## Key Patterns
- Always use `providedIn: 'root'` for singleton services
- Use `inject()` function instead of constructor injection
- Design services around single responsibility
- Use signals for service state management
- Expose readonly signals publicly