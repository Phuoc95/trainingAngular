import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Check } from './../../models/check.model'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var check = localStorage.getItem('checkLogin');
    let jsonCheck: Check = JSON.parse(check);
    if (jsonCheck && jsonCheck.check) {
      return true;
    }
    return false;

  }

}
