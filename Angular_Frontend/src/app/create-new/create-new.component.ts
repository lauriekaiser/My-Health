import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent {
  error: string='';
  
doctor= {
  username: '',
  password: '',
  email: '',
};

constructor(private http: HttpClient, private router:Router) {}

createNew(){
  this.http.post('http://localhost:3000/doctors', this.doctor).subscribe(
    (response) => {
      console.log('Doctor created successfully', response);
      this.router.navigateByUrl('/home');
    },
    (error) => {
      console.log('Error creating new doctor', error);
      this.error = 'Error creating new doctor'
    }
  );
}
}
