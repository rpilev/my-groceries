import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, animate, transition, state, style } from '@angular/animations';
import { GroceriesService } from './groceries.service';
import { Grocery } from './grocery.model';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css'],
  animations: [
    trigger('grocery_animation', [
      transition('* -> void', animate( 500, 
        style({
          opacity: 0,
          transform: 'translateX(100px)'
        }))
      ),
      transition('void -> *', [
        style({
          opacity: 0,
          transform: 'translateX(100px)',
        }),
        animate( 500, 
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        )]
      ),
    ]),
    trigger('overlay_animation',
      [
        state('1', style({
          opacity: 0,
          display: 'none'
        })),
        state('0', style({
          opacity: 1,
          display: 'block'
        })),
        transition('0 => 1', [
          animate('250ms')
        ]),
        transition('1 => 0', [
          animate('250ms')
        ])
      ]
    ),
    trigger('overlay_inner_animation',
      [
        state('1', style({
          transform: 'scale(0.5)'
        })),
        state('0', style({
          transform: 'scale(1)'
        })),
        transition('0 => 1', [
          animate('250ms')
        ]),
        transition('1 => 0', [
          animate('250ms')
        ])
      ]
    )
  ]
})
export class GroceriesComponent implements OnInit {

  groceries: Grocery[];
  overlay_hidden = true;
  mode = null;
  @ViewChild('form') form: NgForm;

  constructor(private groceriesService: GroceriesService) { }

  ngOnInit() {
    this.groceries = this.groceriesService.getGroceries();
    this.groceriesService.groceriesChanged.subscribe(
      groceries => {
        this.groceries = groceries;
      }
    );
  }

  onCheckout(index) {
    this.groceriesService.checkoutGrocery(index);
  }

  toggleOverlay() {
    this.overlay_hidden = !this.overlay_hidden;
  }

  prepareOverlay(index: number, name: string, quantity: number) {

    if(this.mode === 'edit') {
      this.form.controls.name.setValue(name);
      this.form.controls.quantity.setValue(quantity);
      this.form.controls.index.setValue(index);

    } else if (this.mode === 'add') {
      this.form.reset();
    }
  }

  onFormSubmit() {

    let grocery = new Grocery(this.form.value.name, this.form.value.quantity);

    if(this.mode === 'edit') {
      this.groceriesService.editGrocery(this.form.value.index, grocery);
    } else if (this.mode === 'add') {
      this.groceriesService.addGrocery(grocery);
    }
    this.toggleOverlay();
  }

}
