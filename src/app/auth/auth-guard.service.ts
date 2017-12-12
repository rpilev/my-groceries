import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(state: ActivatedRouteSnapshot, route: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
    if(this.authService.token != null){
      return true;
    } else {
      this.router.navigate(['signin']);
      return false;
    }
  }
}