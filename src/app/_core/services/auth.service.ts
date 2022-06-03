import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { delay, Observable, of, throwError } from "rxjs";
import { newUUID } from "../constants/base-constants";
import { UserDto } from "../models/user.dto";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('userInfo') !== null;
  }

  getUserInfo(): string {
    return JSON.parse(localStorage.getItem('userInfo')) as string;
  }

  login(userName: string, password: string): Observable<string> {
    const user = this.mockUsers.find(i => i.userName === userName && i.password === password);
    console.log(user);
    if (!user) {
      return throwError(() => new Error('system.userNotFound'));
    }
    localStorage.setItem('userInfo', JSON.stringify(user.userName))
    return of(user.userName).pipe(delay(1000));
  }

  logOut() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/']);
  }




  private mockUsers: UserDto[] = [{
    id: newUUID(),
    userName: 'firot',
    password: '123'
  }];
}
