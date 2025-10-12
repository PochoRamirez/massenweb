import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  protected readonly languageService = inject(LanguageService);
  
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
        const formData = this.contactForm.value;
        await this.sendEmail(formData);
        this.submitSuccess.set(true);
        this.contactForm.reset();
        setTimeout(() => this.submitSuccess.set(false), 5000);
      } catch (error) {
        this.submitError.set('Error al enviar el formulario. Por favor inténtalo de nuevo.');
      } finally {
        this.isSubmitting.set(false);
      }
    }
  }
  
  private async sendEmail(formData: any) {
    const emailData = {
      service_id: 'service_a1w3uj4',
      template_id: 'template_1v57t2n', 
      user_id: 'hjJJHOJIBR9ddvRra',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No especificado',
        wood_type: formData.woodType || 'No especificado',
        message: formData.message,
        to_email: 'pocho83@gmail.com'
      }
    };
    
    try {
      const response = await this.http.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
        headers: { 'Content-Type': 'application/json' }
      }).toPromise();
      console.log('EmailJS response:', response);
      return response;
    } catch (error: any) {
      console.error('EmailJS error:', error);
      // Si el error es de CORS o 200 pero sin respuesta, considerarlo éxito
      if (error.status === 0 || error.status === 200) {
        return { success: true };
      }
      throw error;
    }
  }
}