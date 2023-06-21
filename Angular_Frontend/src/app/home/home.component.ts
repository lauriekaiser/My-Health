import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Doctor {
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

  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.doctorLogInForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  get email(){
    return this.doctorLogInForm.get('email')?.getRawValue();
  }
  get password(){
    return this.doctorLogInForm.get('password')?.getRawValue();
  }

  onSubmit() {
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


onClickButton(): void {
  this.router.navigate(['/create-new']);
}
}