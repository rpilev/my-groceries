import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDiUm_3aoQ6EblyEtQpN93BuGL2o9rBJ_s",
      authDomain: "grocerylist-b61ba.firebaseapp.com",
      databaseURL: "https://grocerylist-b61ba.firebaseio.com/"
    })
  }
}
