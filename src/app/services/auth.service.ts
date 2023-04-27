import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isLoggedIn: boolean = false;
 isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn);

  constructor(private router: Router) { }


  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      this.isLoggedIn = true;
      this.isLoggedInSubject.next(this.isLoggedIn);
      return true;
    } else {
      this.isLoggedIn = false;
      this.isLoggedInSubject.next(this.isLoggedIn);
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    this.isLoggedInSubject.next(this.isLoggedIn);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

}
