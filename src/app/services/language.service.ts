import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _currentLanguage = signal('es');
  
  readonly currentLanguage = this._currentLanguage.asReadonly();
  
  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLang = localStorage.getItem('language') || 'es';
      this._currentLanguage.set(savedLang);
    }
  }
  
  setLanguage(lang: 'es' | 'en') {
    this._currentLanguage.set(lang);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', lang);
    }
  }
  
  getTranslation(key: string): string {
    const translations: Record<string, Record<string, string>> = {
      es: {
        'nav.home': 'Inicio',
        'nav.features': 'Características',
        'nav.products': 'Productos',
        'nav.contact': 'Contacto',
        'nav.quote': 'Cotizar',
        'hero.title': 'Madera de Calidad Premium',
        'hero.subtitle': 'Creando excelencia con madera sostenible para tus proyectos soñados. Desde construcción hasta muebles finos, proporcionamos los mejores materiales de madera.',
        'hero.explore': 'Explorar Productos',
        'hero.quote': 'Obtener Cotización',
        'hero.years': 'Años de Experiencia',
        'hero.clients': 'Clientes Satisfechos',
        'hero.types': 'Medidas Disponibles',
        'features.title': '¿Por qué Elegir Nuestra Madera?',
        'features.subtitle': 'Estamos comprometidos a proporcionar madera de la más alta calidad con prácticas sostenibles y un servicio al cliente excepcional.',
        'products.title': 'Nuestra Colección de Madera Premium',
        'products.subtitle': 'Descubre nuestra gama cuidadosamente seleccionada de madera premium, perfecta para construcción, muebles y proyectos especiales.',
        'products.all': 'Todos los Productos',
        'products.hardwood': 'Madera Dura',
        'products.softwood': 'Madera Blanda',
        'products.quote': 'Cotizar',
        'products.sustainable': 'Sostenible',
        'products.certified': 'Certificado',
        'products.fastship': 'Envío Rápido',
        'products.custom.title': '¿Necesitas Especificaciones Personalizadas?',
        'products.custom.subtitle': 'Ofrecemos servicios de corte, acabado y procesamiento personalizados para todas tus necesidades específicas.',
        'products.custom.button': 'Contactar Nuestros Expertos',
        'contact.title': 'Obtén tu Cotización Personalizada',
        'contact.subtitle': '¿Listo para comenzar tu proyecto? Contacta a nuestros expertos en madera para recomendaciones personalizadas y precios competitivos.',
        'contact.info': 'Información de Contacto',
        'contact.address': 'Dirección',
        'contact.phone': 'Teléfono',
        'contact.email': 'Email',
        'contact.hours': 'Horario de Atención',
        'contact.follow': 'Síguenos',
        'contact.form.name': 'Nombre Completo',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.phone': 'Número de Teléfono',
        'contact.form.woodtype': 'Tipo de Madera',
        'contact.form.message': 'Detalles del Proyecto',
        'contact.form.submit': 'Obtener Mi Cotización Personalizada',
        'contact.form.sending': 'Enviando Solicitud de Cotización...',
        'contact.form.success': '¡Gracias! Te contactaremos en 24 horas con tu cotización personalizada.',
        'contact.form.note': '* Responderemos en 24 horas con tu cotización personalizada',
        'contact.hours.schedule': 'Lun-Vie: 8AM-6PM<br>Sáb: 9AM-4PM'
      },
      en: {
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.products': 'Products',
        'nav.contact': 'Contact',
        'nav.quote': 'Get Quote',
        'hero.title': 'Premium Quality Wood',
        'hero.subtitle': 'Crafting excellence with sustainable timber for your dream projects. From construction to fine furniture, we provide the finest wood materials.',
        'hero.explore': 'Explore Products',
        'hero.quote': 'Get Quote',
        'hero.years': 'Years Experience',
        'hero.clients': 'Happy Clients',
        'hero.types': 'Available Sizes',
        'features.title': 'Why Choose Our Wood?',
        'features.subtitle': 'We\'re committed to providing the highest quality timber with sustainable practices and exceptional customer service.',
        'products.title': 'Our Premium Wood Collection',
        'products.subtitle': 'Discover our carefully selected range of premium timber, perfect for construction, furniture, and specialty projects.',
        'products.all': 'All Products',
        'products.hardwood': 'Hardwood',
        'products.softwood': 'Softwood',
        'products.quote': 'Quote',
        'products.sustainable': 'Sustainable',
        'products.certified': 'Certified',
        'products.fastship': 'Fast Ship',
        'products.custom.title': 'Need Custom Specifications?',
        'products.custom.subtitle': 'We offer custom cutting, finishing, and processing services for all your specific needs.',
        'products.custom.button': 'Contact Our Experts',
        'contact.title': 'Get Your Custom Quote',
        'contact.subtitle': 'Ready to start your project? Contact our wood experts for personalized recommendations and competitive pricing.',
        'contact.info': 'Contact Information',
        'contact.address': 'Address',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.hours': 'Business Hours',
        'contact.follow': 'Follow Us',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.phone': 'Phone Number',
        'contact.form.woodtype': 'Wood Type',
        'contact.form.message': 'Project Details',
        'contact.form.submit': 'Get My Custom Quote',
        'contact.form.sending': 'Sending Quote Request...',
        'contact.form.success': 'Thank you! We\'ll contact you within 24 hours with your custom quote.',
        'contact.form.note': '* We\'ll respond within 24 hours with your personalized quote',
        'contact.hours.schedule': 'Mon-Fri: 8AM-6PM<br>Sat: 9AM-4PM'
      }
    };
    
    return translations[this._currentLanguage()][key] || key;
  }
}