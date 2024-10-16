import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {path:'', redirectTo:'home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {path: 'signup',component: SignupComponent},
  // Default route
  { path: 'login', component: AboutComponent }, // Route to the 'about' page
  { path: '**', component: NotFoundComponent },
];
