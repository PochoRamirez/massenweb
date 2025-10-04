# Angular Forms Memory Bank

## Reactive Forms Pattern
```typescript
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <div class="field">
        <label for="name">Name</label>
        <input id="name" formControlName="name" type="text">
        @if (userForm.get('name')?.invalid && userForm.get('name')?.touched) {
          <span class="error">Name is required</span>
        }
      </div>
      
      <div class="field">
        <label for="email">Email</label>
        <input id="email" formControlName="email" type="email">
        @if (userForm.get('email')?.invalid && userForm.get('email')?.touched) {
          <span class="error">Valid email is required</span>
        }
      </div>
      
      <button type="submit" [disabled]="userForm.invalid || isSubmitting()">
        @if (isSubmitting()) {
          Submitting...
        } @else {
          Submit
        }
      </button>
    </form>
  `,
  imports: [ReactiveFormsModule]
})
export class UserFormComponent {
  private readonly fb = inject(FormBuilder);
  
  protected readonly isSubmitting = signal(false);
  
  protected readonly userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    age: [null, [Validators.min(18), Validators.max(120)]]
  });
  
  async onSubmit() {
    if (this.userForm.valid) {
      this.isSubmitting.set(true);
      
      try {
        const formValue = this.userForm.value;
        await this.submitUser(formValue);
        this.userForm.reset();
      } catch (error) {
        console.error('Submission failed:', error);
      } finally {
        this.isSubmitting.set(false);
      }
    }
  }
  
  private async submitUser(user: any) {
    // API call logic
  }
}
```

## Form Validation Patterns
```typescript
// Custom validator
function ageValidator(control: AbstractControl): ValidationErrors | null {
  const age = control.value;
  if (age && (age < 18 || age > 120)) {
    return { ageRange: { min: 18, max: 120, actual: age } };
  }
  return null;
}

// Async validator
function uniqueEmailValidator(userService: UserService) {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }
    
    return userService.checkEmailExists(control.value).pipe(
      map(exists => exists ? { emailTaken: true } : null),
      catchError(() => of(null))
    );
  };
}

// Form with custom validators
protected readonly userForm = this.fb.group({
  name: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email], [uniqueEmailValidator(this.userService)]],
  age: [null, [Validators.required, ageValidator]]
});
```

## Dynamic Forms Pattern
```typescript
@Component({
  selector: 'app-dynamic-form'
})
export class DynamicFormComponent {
  private readonly fb = inject(FormBuilder);
  
  protected readonly form = this.fb.group({
    items: this.fb.array([])
  });
  
  get itemsArray() {
    return this.form.get('items') as FormArray;
  }
  
  addItem() {
    const itemGroup = this.fb.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
    
    this.itemsArray.push(itemGroup);
  }
  
  removeItem(index: number) {
    this.itemsArray.removeAt(index);
  }
}
```

## Key Rules
- Always prefer Reactive Forms over Template-driven forms
- Use FormBuilder for form creation
- Implement proper validation with clear error messages
- Use signals for form submission state
- Handle async operations properly