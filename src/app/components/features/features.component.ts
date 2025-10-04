import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  templateUrl: './features.component.html'
})
export class FeaturesComponent {
  protected readonly features = signal<Feature[]>([
    {
      id: 1,
      icon: 'fas fa-leaf',
      title: 'Abastecimiento Sostenible',
      description: 'Toda nuestra madera proviene de bosques gestionados responsablemente con certificación FSC'
    },
    {
      id: 2,
      icon: 'fas fa-award',
      title: 'Calidad Premium',
      description: 'Madera seleccionada a mano con patrones de veta superiores y durabilidad'
    },
    {
      id: 3,
      icon: 'fas fa-cogs',
      title: 'Procesamiento Personalizado',
      description: 'Servicios de corte y acabado personalizados para cumplir con tus especificaciones exactas'
    },
    {
      id: 4,
      icon: 'fas fa-shipping-fast',
      title: 'Entrega Rápida',
      description: 'Servicio de entrega rápido y confiable a tu ubicación a nivel nacional'
    }
  ]);
}