import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Doctor {
  email: string;
  password: string;
}
interface Patient {
  email: string;
  password: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  doctorLogInForm!: FormGroup;
  error: string = '';
  patientLogInForm!: FormGroup;

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.doctorLogInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.patientLogInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get email(){
    return this.doctorLogInForm.get('email')?.getRawValue() ||  this.patientLogInForm.get('email')?.getRawValue();
  }
  get password(){
    return this.doctorLogInForm.get('password')?.getRawValue() || this.patientLogInForm.get('password')?.getRawValue();
  }



  onSubmitForm1() {
    console.log('Form submitted');
    this.http
    .post('http://localhost:3000/doctors/login', {
    email: this.email,
    password: this.password,
    })
    .subscribe((response: any) => {
      console.log(response);
      const loggedIn = response?.login;
      if (loggedIn) {
        localStorage.setItem('loggedInDoctor', this.email || '');
        this.router.navigateByUrl('/doctor-images');
      } else{
        this.error = 'Invalid username or password';
      }
    });
  }


onClickButton1(): void {
  this.router.navigate(['/create-new']);
}



onSubmitForm2() {
  console.log('Patient form submitted');
  this.http
  .post('http://localhost:3000/patients', {
  patientEmail: this.email,
  patientPassword: this.password,
  })
  .subscribe((response: any) => {
    console.log(response);
    const loggedIn = response?.login;
    if (loggedIn) {
      localStorage.setItem('loggedInPatient', this.email || '');
      this.router.navigateByUrl('/doctor-landing');
    } else{
      this.error = 'Invalid username or password';
    }
  });
}

onClickButton2(): void {
  this.router.navigate(['/create-new']);
}
}