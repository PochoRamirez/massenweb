# Angular Routing Memory Bank

## Standalone Routing Pattern
```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
```

## Route Configuration
```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes').then(r => r.userRoutes)
  },
  {
    path: 'profile/:id',
    loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent),
    canActivate: [authGuard]
  },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent) }
];
```

## Feature Routes
```typescript
// users/users.routes.ts
import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user-list/user-list.component').then(c => c.UserListComponent)
  },
  {
    path: 'create',
    loadComponent: () => import('./user-form/user-form.component').then(c => c.UserFormComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./user-detail/user-detail.component').then(c => c.UserDetailComponent)
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./user-form/user-form.component').then(c => c.UserFormComponent)
  }
];
```

## Route Guards
```typescript
// guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticated()) {
    return true;
  }
  
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
```

## Navigation Component
```typescript
@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="/dashboard" 
         routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">
        Dashboard
      </a>
      <a routerLink="/users" routerLinkActive="active">Users</a>
      <a routerLink="/profile/{{ currentUserId() }}" routerLinkActive="active">
        Profile
      </a>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive]
})
export class NavigationComponent {
  private readonly authService = inject(AuthService);
  
  protected readonly currentUserId = computed(() => 
    this.authService.currentUser()?.id
  );
}
```

## Programmatic Navigation
```typescript
@Component({
  selector: 'app-example'
})
export class ExampleComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  
  navigateToUser(userId: string) {
    this.router.navigate(['/users', userId]);
  }
  
  navigateWithQuery() {
    this.router.navigate(['/search'], { 
      queryParams: { q: 'angular', page: 1 } 
    });
  }
  
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
```

## Key Patterns
- Use lazy loading for all feature routes
- Implement functional guards with `inject()`
- Use standalone components for routing
- Always handle route parameters with signals
- Implement proper error handling for route guards