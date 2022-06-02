import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {


  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isLoggedIn = this.authService.isLoggedIn();
    if (!isLoggedIn) {
      localStorage.removeItem('userInfo');
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
