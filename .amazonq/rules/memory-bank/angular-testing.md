# Angular Testing Memory Bank

## Component Testing Pattern
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent] // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user name signal', () => {
    const newName = 'John Doe';
    
    component.updateName(newName);
    
    expect(component.userName()).toBe(newName);
  });

  it('should emit user selected event', () => {
    const user = { id: '1', name: 'Test User' };
    let emittedUser: any;
    
    component.userSelected.subscribe(value => emittedUser = value);
    component.selectUser(user);
    
    expect(emittedUser).toEqual(user);
  });

  it('should render user list', () => {
    const users = [
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' }
    ];
    
    fixture.componentRef.setInput('users', users);
    fixture.detectChanges();
    
    const userElements = fixture.debugElement.queryAll(By.css('.user-item'));
    expect(userElements.length).toBe(2);
  });
});
```

## Service Testing Pattern
```typescript
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should load users', async () => {
    const mockUsers = [
      { id: '1', name: 'User 1' },
      { id: '2', name: 'User 2' }
    ];

    const loadPromise = service.loadUsers();
    
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
    
    await loadPromise;
    
    expect(service.users()).toEqual(mockUsers);
    expect(service.loading()).toBe(false);
  });

  it('should handle error when loading users', async () => {
    const loadPromise = service.loadUsers();
    
    const req = httpMock.expectOne('/api/users');
    req.error(new ProgressEvent('Network error'));
    
    try {
      await loadPromise;
    } catch (error) {
      expect(service.error()).toBeTruthy();
      expect(service.loading()).toBe(false);
    }
  });
});
```

## Signal Testing Pattern
```typescript
import { signal, computed } from '@angular/core';

describe('Signal Logic', () => {
  it('should update computed when signal changes', () => {
    const count = signal(0);
    const doubleCount = computed(() => count() * 2);
    
    expect(doubleCount()).toBe(0);
    
    count.set(5);
    expect(doubleCount()).toBe(10);
    
    count.update(current => current + 1);
    expect(doubleCount()).toBe(12);
  });

  it('should handle array signal updates', () => {
    const items = signal<string[]>([]);
    const itemCount = computed(() => items().length);
    
    expect(itemCount()).toBe(0);
    
    items.update(current => [...current, 'item1']);
    expect(itemCount()).toBe(1);
    expect(items()).toEqual(['item1']);
    
    items.update(current => current.filter(item => item !== 'item1'));
    expect(itemCount()).toBe(0);
  });
});
```

## Integration Testing Pattern
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

describe('App Integration', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([
          { path: 'users', component: MockUsersComponent },
          { path: '', redirectTo: '/users', pathMatch: 'full' }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    
    fixture.detectChanges();
  });

  it('should navigate to users', async () => {
    await router.navigate(['/users']);
    expect(location.path()).toBe('/users');
  });
});
```

## Mock Patterns
```typescript
// Mock service
const mockUserService = {
  users: signal([]),
  loading: signal(false),
  loadUsers: jasmine.createSpy('loadUsers').and.returnValue(Promise.resolve())
};

// Mock with TestBed
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ComponentUnderTest],
    providers: [
      { provide: UserService, useValue: mockUserService }
    ]
  });
});

// Spy on signals
it('should call service method', () => {
  spyOn(mockUserService, 'loadUsers');
  
  component.loadData();
  
  expect(mockUserService.loadUsers).toHaveBeenCalled();
});
```

## Key Testing Rules
- Test components as standalone imports
- Use signals in tests - they're synchronous
- Mock HTTP calls with HttpClientTestingModule
- Test signal state changes and computed values
- Use spies for method calls and event emissions
- Test both success and error scenarios