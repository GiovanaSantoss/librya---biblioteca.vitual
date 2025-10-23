import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  // IMPORTANTE: Substitua esta URL pela URL real da sua API de registro
  private apiUrl = 'http://localhost:3000/api/auth/registrar';

  constructor(private http: HttpClient) { }

  /**
   * Envia os dados do novo usuário para a API.
   * @param dadosUsuario Objeto com nome, email e senha.
   * @returns Um Observable com a resposta da API.
   */
  registrar(dadosUsuario: any): Observable<any> {
    return this.http.post(this.apiUrl, dadosUsuario);
  }

  // Você pode adicionar outros métodos aqui no futuro (login, logout, etc.)
}