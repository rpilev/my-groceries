import { Subject, } from 'rxjs';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  error = new Subject<string>();
  token = null;

  constructor(private router: Router) { }

  signupUser(values: {email: string, password: string}) {
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then(
        success => {
          this.signinUser(values.email, values.password);
        }
      )
      .catch(
        error => {
          this.error.next(error);
        }
      )

  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        success => {
          firebase.auth().currentUser.getToken().then(
            token => {
              this.token = token;
            }
          );

          this.router.navigate(['']);
        }
      )
      .catch(
        error => {
          this.error.next(error);
        }
      )
  }

  signOutUser() {
    this.token = null;
    firebase.auth().signOut();
    this.router.navigate(['']);
  }

  isUserSignedIn() {
    return this.token !== null;
  }

}
