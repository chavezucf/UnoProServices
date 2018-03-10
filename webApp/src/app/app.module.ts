import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from './core/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { BooknowComponent } from './components/booknow/booknow.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'booknow', component: BooknowComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'adminlogin', component: AdminloginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    ServicesComponent,
    AboutComponent,
    BooknowComponent,
    ContactusComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule 
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
