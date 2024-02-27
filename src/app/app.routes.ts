import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { AboutUsComponent } from "./staticpages/about-us/about-us.component";
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';
export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:LatestArticlesComponent},
    {path:'article',component:ArticleListComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'article/:id',component:ArticleDetailsComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'**',component:PagenotfoundComponent},
 
];
