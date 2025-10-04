import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule]
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  
  protected readonly isSubmitting = signal(false);
  protected readonly submitSuccess = signal(false);
  protected readonly submitError = signal<string | null>(null);
  
  protected readonly contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    woodType: [''],
    message: ['', [Validators.required]]
  });
  
  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitError.set(null);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        this.submitSuccess.set(true);
        this.contactForm.reset();
        setTimeout(() => this.submitSuccess.set(false), 3000);
      } catch (error) {
        this.submitError.set('Error al enviar el formulario. Por favor inténtalo de nuevo.');
      } finally {
        this.isSubmitting.set(false);
      }
    }
  }
}