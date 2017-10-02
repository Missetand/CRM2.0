import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, LoginComponent, MunicipalitiesComponent } from '../components/index';
import { AuthGuard } from '../auth-guard.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ]},
  { path: 'login', component: LoginComponent },
  { path: 'municipalities', component: MunicipalitiesComponent, canActivate: [ AuthGuard ] }
];
