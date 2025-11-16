// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user';

  constructor(private router: Router) {}

  login(email: string, senha: string): boolean {
    // Aqui você verifica login (chamando API, validando credenciais, etc).
    // Para exemplo simples, vamos simular login bem-sucedido:
    const fakeUser = { email };
    localStorage.setItem(this.USER_KEY, JSON.stringify(fakeUser));
    return true;
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
