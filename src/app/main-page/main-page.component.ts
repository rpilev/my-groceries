import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  message: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.token === null) {
      this.message = 'Welcome! Please sign in to see your groceries.';
    } else {
      this.message = "You are signed in. Go to the groceries tab to see what you've got.";
    }
  }

}
