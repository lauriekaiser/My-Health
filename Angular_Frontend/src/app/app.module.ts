import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorImagesComponent } from './doctor-images/doctor-images.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { CreateNewComponent } from './create-new/create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorLoginComponent,
    DoctorImagesComponent,
    PatientLoginComponent,
    CreateNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
