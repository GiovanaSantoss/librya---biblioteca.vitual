import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const success = this.authService.login(this.email, this.password);

    if (success) {
      localStorage.setItem('user', 'logado');  // Login válido
      this.router.navigate(['/books']);
    } else {
      alert('Credenciais inválidas');
    }
}


  logout() {
    this.authService.logout();
  }

  // login() {
  //   if (this.email.trim() === '' || this.password.trim() === '') {
  //     alert('Preencha todos os campos!');
  //     return;
  //   }

  //   localStorage.setItem('user', JSON.stringify({ email: this.email }));
  //   this.router.navigate(['/books']);
  // }

  // logout() {
  //   localStorage.removeItem('user');
  //   this.router.navigate(['/login']);
  // }

}
