import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let check = localStorage.getItem('checkLogin');
          check  = JSON.parse(check);
          console.log("TCL: AuthGuard -> check", check)
          if (check && check.check) {
            return true;
          }
          return false;
   
  }
  
}
