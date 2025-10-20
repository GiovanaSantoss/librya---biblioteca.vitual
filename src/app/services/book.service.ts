import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private books: Book[] = [
    {
      id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', coverImage: 'assets/images/aneis.jpg',
      status: 'toBeRead', sinopse: 'Uma épica aventura na Terra Média onde hobbits, elfos, anões e homens se unem para destruir o Um Anel e derrotar o Senhor do Escuro, Sauron.'
    },
    {
      id: 2, title: 'O Guia do Mochileiro das Galáxias', author: 'Douglas Adams', coverImage: 'assets/images/mochileiro.jpg',
      status: 'toBeRead', sinopse: 'Um homem comum é levado em uma jornada intergaláctica após a destruição da Terra.'
    },
    {
      id: 3, title: 'Duna', author: 'Frank Herbert', coverImage: 'assets/images/duna.jpg',
      status: 'toBeRead', sinopse: 'Em um futuro distante, a luta pelo controle do planeta desértico Arrakis e sua valiosa especiaria.'
    },
    {
      id: 4, title: 'A biblioteca da meia noite', author: 'Matt Haig', coverImage: 'assets/images/A-biblioteca-da-meia-noite.jpg',
      status: 'lendo', sinopse: 'Uma história sobre a vida, a morte e as escolhas que fazemos.'
    },
    {
      id: 5, title: 'A hora da estrela', author: 'Clarice Lispector', coverImage: 'assets/images/a-hora-da-estrela.jpg',
      status: 'lendo', sinopse: 'A história de uma jovem nordestina que se muda para o Rio de Janeiro em busca de uma vida melhor.'
    },
    {
      id: 6, title: 'Jantar Secreto', author: 'Rafael Montes', coverImage: 'assets/images/jantar-secreto.jpg',
      status: 'lido', sinopse: 'Um thriller psicológico que explora os segredos e mentiras de um grupo de amigos durante um jantar.'
    },
    {
      id: 7, title: 'Deixada para trás', author: 'Charlie Donlea', coverImage: 'assets/images/deixada-para-tras.jpg',
      status: 'lido', sinopse: 'Uma trama envolvente sobre segredos familiares e reviravoltas inesperadas.'
    },
    {
      id: 8, title: 'Uma vida pequena', author: 'Hanya Yanagihara', coverImage: 'assets/images/uma-vida-pequena.jpg',
      status: 'lido', sinopse: 'A história de quatro amigos que se conhecem na infância e enfrentam desafios ao longo da vida.'
    }
  ];

  constructor() { }
  getBooks(): Book[] {
    return this.books;
  }
}