import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user';
  private readonly API_URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}

  registrar(userData: any): Observable<any> {
    return this.http.post(this.API_URL, userData);
  }

  login(email: string, senha: string): Observable<any[]> {
    const url = `${this.API_URL}?email=${email}&password=${senha}`;
    return this.http.get<any[]>(url);
    // const fakeUser = { email };
    // localStorage.setItem(this.USER_KEY, JSON.stringify(fakeUser));
    // return true;
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  getUser(): any {
    const u = localStorage.getItem(this.USER_KEY);
    return u ? JSON.parse(u) : null;
  }
}

