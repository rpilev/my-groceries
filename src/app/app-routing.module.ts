import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { GroceriesComponent } from './user-modules/groceries/groceries.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'groceries',
    component: GroceriesComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }