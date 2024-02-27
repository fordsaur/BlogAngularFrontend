import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { ArticlesModule } from './articles/articles.module';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ArticlesModule, RegistrationComponent, HttpClientModule,ReactiveFormsModule, BannerComponent, LatestArticlesComponent,FooterComponent,LoginComponent, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CMSProject';
  ishomerouter:boolean=true;
  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.router.events.subscribe((routes)=>{
      if (routes instanceof NavigationEnd){
        console.log("routes",routes.url);
        if(routes.url =="/home"){
          this.ishomerouter = true
        }else{
          this.ishomerouter = false
        }

      }
    })
  }
}
