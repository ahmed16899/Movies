import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './Guard/auth.guard';
import { LogregGuard } from './Guard/logreg.guard';
import { HomeComponent } from './home/home.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TopmoviesComponent } from './topmovies/topmovies.component';


const routes : Routes=[
  // {path:'',redirectTo:'home',canActivate:[AuthGuard],component:HomeComponent},
  // {path:'',redirectTo:'home',component:HomeComponent},

  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'',canActivate:[AuthGuard],component:HomeComponent},
  {path:'login',canActivate:[LogregGuard],component:SigninComponent},
  {path:'register',canActivate:[LogregGuard],component:RegisterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'moviedetails/:id/:type',canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:'toprated/:type',canActivate:[AuthGuard],component:TopmoviesComponent},
  {path:'favorites',canActivate:[AuthGuard],component:FavoritesComponent},
  {path:'footer',component:FooterComponent}



];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
