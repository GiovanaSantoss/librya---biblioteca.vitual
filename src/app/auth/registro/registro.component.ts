import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched(); // Exibe os erros de validação se o form for inválido
      return;
    }

    this.auth.registrar(this.registroForm.value).subscribe({
      next: () => {
        console.log('Registro bem-sucedido!');
        // Navega para a tela de login após o sucesso
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Ocorreu um erro no registro:', err);
        // Aqui você pode adicionar uma lógica para mostrar um alerta de erro ao usuário
      }
    });
  }
}