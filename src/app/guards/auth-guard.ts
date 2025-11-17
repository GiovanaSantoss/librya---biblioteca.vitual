import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // const isLogged = !!localStorage.getItem('user');
    const userStr = localStorage.getItem('user');
  
    if (!userStr) {
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const user = JSON.parse(userStr);
      if (!user?.id) {
        this.router.navigate(['/login']);
        return false;
      }
    } catch (e) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;

  //   if (isLogged) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  }
}
