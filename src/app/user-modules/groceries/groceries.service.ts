import { Injectable } from '@angular/core';
import { Grocery } from './grocery.model';
import { Subject } from 'rxjs';

@Injectable()
export class GroceriesService {

  private groceries: Grocery[] = [
    new Grocery('Banana', 3),
    new Grocery('Apple', 1),
    new Grocery('Beans', 32)
  ];

  groceriesChanged = new Subject<Grocery[]>();

  constructor() { }

  getGroceries() {
    return this.groceries.slice();
  }

  addGrocery(grocery: Grocery) {
    this.groceries.push(grocery);
    this.groceriesChanged.next(this.groceries.slice());
  }

  editGrocery(index, grocery: Grocery) {
    this.groceries[index] = grocery;
    this.groceriesChanged.next(this.groceries.slice());
  }

  checkoutGrocery(index) {
    this.groceries.splice(index, 1);
    this.groceriesChanged.next(this.groceries.slice());
  }

}
