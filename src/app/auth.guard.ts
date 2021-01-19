import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
//import { AlternativeServiceOptions } from 'http2';
import { Observable } from 'rxjs';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:ServiceService,private _router:Router)
 {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this._authService.logedIn())
      { 
        return true
      }
      else
      { 
        alert('Please Login!')
        this._router.navigate(['/home'])
        
        return false
      }
 //   return true;
  }
  
}
