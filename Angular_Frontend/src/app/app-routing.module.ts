import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewComponent } from './create-new/create-new.component';
import { HomeComponent } from './home/home.component';
import { DoctorImagesComponent } from './doctor-images/doctor-images.component';
import { NavComponent } from './nav/nav.component';
import { DoctorLandingComponent } from './doctor-landing/doctor-landing.component';

const routes: Routes = [
  {path: 'create-new', component: CreateNewComponent},
  {path: 'doctor-images', component: DoctorImagesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'doctor-landing', component: DoctorLandingComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
