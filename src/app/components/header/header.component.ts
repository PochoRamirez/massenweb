import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styles: [`
    .navbar.bg-wood {
      background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%) !important;
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      font-family: 'Playfair Display', serif;
      color: white !important;
      font-weight: bold;
    }
    
    .nav-link {
      color: white !important;
      font-weight: 500;
    }
    
    .nav-link:hover {
      color: #deb887 !important;
    }
    
    .btn-outline-light {
      border-color: white;
      color: white;
    }
    
    .btn-outline-light:hover {
      background-color: white;
      color: #8b4513;
    }
  `]
})
export class HeaderComponent {
  protected readonly isMenuOpen = signal(false);
  
  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }
}