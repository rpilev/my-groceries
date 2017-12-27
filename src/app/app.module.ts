import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { GroceriesComponent } from './user-modules/groceries/groceries.component';
import { MainPageComponent } from './main-page/main-page.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

import { GroceriesService } from './user-modules/groceries/groceries.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    GroceriesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuard, GroceriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
