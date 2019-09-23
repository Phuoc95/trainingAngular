import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from './../../components/login/login.component'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanDeactivate<LoginComponent> {
  CanDeactivate() {
    return false
  }
}
