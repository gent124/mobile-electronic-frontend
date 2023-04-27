import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_KEY = 'myapp-auth';

  isLoggedIn: boolean = false;
  isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn);

  constructor(private router: Router) {
    // Read the authentication state from local storage on startup
    const storedAuth = localStorage.getItem(this.AUTH_KEY);
    if (storedAuth) {
      this.isLoggedIn = JSON.parse(storedAuth);
      this.isLoggedInSubject.next(this.isLoggedIn);
    }
  }

  login(username: string, password: string): boolean {
    if (username == 'admin' && password == 'admin') {
      this.isLoggedIn = true;
      this.isLoggedInSubject.next(this.isLoggedIn);

      // Store the authentication state in local storage
      localStorage.setItem(this.AUTH_KEY, JSON.stringify(this.isLoggedIn));

      return true;
    } else {
      this.isLoggedIn = false;
      this.isLoggedInSubject.next(this.isLoggedIn);

      // Remove the authentication state from local storage
      localStorage.removeItem(this.AUTH_KEY);

      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    this.isLoggedInSubject.next(this.isLoggedIn);

    // Remove the authentication state from local storage
    localStorage.removeItem(this.AUTH_KEY);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
