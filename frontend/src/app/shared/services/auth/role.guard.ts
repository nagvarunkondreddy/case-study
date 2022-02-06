import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userRole = this.auth.getUserRole();
      if(this.auth.isLoggedIn() && userRole ==='technicalLead'){
        this.router.navigateByUrl('/project');
        return true;

      }
      else{
        this.router.navigateByUrl('/event');
        return false;
      }
  }
  
}
