import { Component } from '@angular/core';
import { RouterLink ,Router,RouterLinkActive, RouterOutlet, RouterModule} from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn:boolean=false
  constructor(private router: Router){
     if(localStorage.getItem('Loginuser')){
      this.isLoggedIn=true;
     }

  }
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  onLogout(){
   localStorage.removeItem('Loginuser');
   this.isLoggedIn=false;
   this.router.navigate(['/']);
  }
}
