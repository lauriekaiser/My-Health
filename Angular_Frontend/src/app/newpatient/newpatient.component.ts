import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent {
  error: string='';
  
  patient= {
    username: '',
    password: '',
    email: '',
  };
  
  constructor(private http: HttpClient, private router:Router) {}
  
  createNew(){
    this.http.post('http://localhost:3000/patients', this.patient).subscribe(
      (response) => {
        console.log('Patient created successfully', response);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log('Error creating new patient', error);
        this.error = 'Error creating new patient'
      }
    );
  }
  }
