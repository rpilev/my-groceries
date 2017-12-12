import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
       form.value.password == '') {
      this.error = 'Please fill in all the fields'
      return;
    }

    this.authService.signinUser(form.value.email, form.value.password);
  }

}
