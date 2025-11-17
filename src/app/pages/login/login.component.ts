import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.email || !this.password) {
      alert('Preencha todos os campos!');
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (users) => {
        if (users.length === 0) {
          alert('Usuário não encontrado. Cadastre-se.');
          this.router.navigate(['/registro']);
        } else {
          const user = users[0];
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/books']);
        }
      },
      error: () => {
        alert('Erro ao conectar com o servidor');
      }
    })

    // fetch(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
    //   .then(res => res.json())
    //   .then(users => {

    //     if (users.length === 0) {
    //       alert('Usuário não encontrado. Cadastre-se.');
    //       this.router.navigate(['/registro']);
    //     } else {
    //       const user = users[0];
    //       localStorage.setItem('user', JSON.stringify(user));
    //       this.router.navigate(['/books']);
    //     }

    //   })
    //   .catch(() => alert('Erro ao conectar com o servidor.'));
  }


  logout() {
    this.authService.logout();
  }
}
