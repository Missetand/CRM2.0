import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { MdToolbarModule, MdIconModule,
         MdGridListModule, MdTableModule,
         MdPaginatorModule, MdButtonModule,
         MatInputModule, MatCardModule
       } from '@angular/material';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CustomerDataService, CustomerDatabase, CustomerSource } from './customer-data.service';
import { MunicipalitiesComponent } from './municipality-components/municipalities/municipalities.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'municipalities', component: MunicipalitiesComponent, canActivate: [ AuthGuard ] }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MunicipalitiesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdTableModule,
    MdPaginatorModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ CustomerDataService, CustomerDatabase, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
