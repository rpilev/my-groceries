import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hideNavbar() {
    $(".navbar-collapse").collapse('hide');
  }

}
