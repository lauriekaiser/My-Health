import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorImagesComponent } from './doctor-images/doctor-images.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { NavComponent } from './nav/nav.component';
import { DoctorLandingComponent } from './doctor-landing/doctor-landing.component';
import { NewpatientComponent } from './newpatient/newpatient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorImagesComponent,
    CreateNewComponent,
    NavComponent,
    DoctorLandingComponent,
    NewpatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
