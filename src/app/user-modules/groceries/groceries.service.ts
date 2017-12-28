import { Injectable } from '@angular/core';
import { Grocery } from './grocery.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class GroceriesService {

  private groceries: Grocery[] = [];

  private database = firebase.database();

  groceriesChanged = new Subject<Grocery[]>();

  constructor() { }

  setUpGroceriesListner() {
    let uid = firebase.auth().currentUser.uid;
    let dbGroceriesRef = this.database.ref('users/' + uid);
    dbGroceriesRef.on('value', function(snapshot) {
      if(snapshot.val()) {
        this.groceries = snapshot.val().groceries;
      } else {
        this.groceries = [];
      }
      this.groceriesChanged.next(this.groceries.slice());
    }.bind(this));
  }

  getGroceries() {
    return this.groceries.slice();
  }

  addGrocery(grocery: Grocery) {
    this.groceries.push(grocery);
    this.updateDb();
  }

  editGrocery(index, grocery: Grocery) {
    this.groceries[index] = grocery;
    this.updateDb();
  }

  checkoutGrocery(index) {
    this.groceries.splice(index, 1);
    this.updateDb();
  }

  updateDb() {
    let uid = firebase.auth().currentUser.uid;
    this.database.ref('users/' + uid).set({
      groceries: this.groceries
    });
  }

}
