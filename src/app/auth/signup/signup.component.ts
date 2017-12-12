import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.error.subscribe(
      error => {
        this.error = error;
      }
    );
  }

  onFormSubmit(form) {

    if(form.value.email == '' ||
       form.value.password == '' ||
       form.value.confirm == '') {
      this.error = 'Please fill in all the fields';
      return;
    }
    if(form.value.password !== form.value.confirm) {
      this.error = 'The passwords do not match';
      return;
    }

    this.authService.signupUser(form.value);
  }

}
