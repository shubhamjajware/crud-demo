import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'sanaya@2#') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(val?: string): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

}
