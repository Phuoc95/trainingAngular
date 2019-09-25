import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './../../components/login/login.component'
import { HomeComponent } from './../../components/home/home.component'
import { Check } from './../../models/check.model'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    var check = localStorage.getItem('active');
    let jsonCheck: Check = JSON.parse(check);
    console.log(jsonCheck, 88);
    if (jsonCheck && jsonCheck.check) {
      alert('de-active roi nha')
      return false;
    }
    return true;
  }
}

