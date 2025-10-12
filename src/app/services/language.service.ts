import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly _currentLanguage = signal('es');
  
  readonly currentLanguage = this._currentLanguage.asReadonly();
  
  constructor() {
    const savedLang = localStorage.getItem('language') || 'es';
    this._currentLanguage.set(savedLang);
  }
  
  setLanguage(lang: 'es' | 'en') {
    this._currentLanguage.set(lang);
    localStorage.setItem('language', lang);
    window.location.reload();
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
        'hero.types': 'Tipos de Madera',
        'features.title': '¿Por qué Elegir Nuestra Madera?',
        'features.subtitle': 'Estamos comprometidos a proporcionar madera de la más alta calidad con prácticas sostenibles y un servicio al cliente excepcional.',
        'contact.title': 'Obtén tu Cotización Personalizada',
        'contact.subtitle': '¿Listo para comenzar tu proyecto? Contacta a nuestros expertos en madera para recomendaciones personalizadas y precios competitivos.'
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
        'hero.types': 'Wood Types',
        'features.title': 'Why Choose Our Wood?',
        'features.subtitle': 'We\'re committed to providing the highest quality timber with sustainable practices and exceptional customer service.',
        'contact.title': 'Get Your Custom Quote',
        'contact.subtitle': 'Ready to start your project? Contact our wood experts for personalized recommendations and competitive pricing.'
      }
    };
    
    return translations[this._currentLanguage()][key] || key;
  }
}