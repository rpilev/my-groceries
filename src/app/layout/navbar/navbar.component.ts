import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  hideNavbar() {
    $(".navbar-collapse").collapse('hide');
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}