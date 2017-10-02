import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { SharedMaterialModule } from './shared/shared.material';

import { AuthService, CustomerDatabase, CustomerDataService, CustomerSource } from './services/index';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent, LoginComponent, NavbarComponent, MunicipalitiesComponent, NewMunicipalityComponent } from './components/index';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MunicipalitiesComponent,
    LoginComponent,
    NewMunicipalityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ CustomerDataService, CustomerDatabase, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
