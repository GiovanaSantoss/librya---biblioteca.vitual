import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private books: Book[] = [
    {
      id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', coverImage: 'assets/images/aneis.jpg',
      status: 'toBeRead'
    },
    {
      id: 2, title: 'O Guia do Mochileiro das Galáxias', author: 'Douglas Adams', coverImage: 'assets/images/mochileiro.jpg',
      status: 'toBeRead'
    },
    {
      id: 3, title: 'Duna', author: 'Frank Herbert', coverImage: 'assets/images/duna.jpg',
      status: 'toBeRead'
    },
    {
      id: 4, title: 'A biblioteca da meia noite', author: 'Matt Haig', coverImage: 'assets/images/A-biblioteca-da-meia-noite.jpg',
      status: 'lendo'
    },
    {
      id: 5, title: 'A hora da estrela', author: 'Clarice Lispector', coverImage: 'assets/images/a-hora-da-estrela.jpg',
      status: 'lendo'
    },
    {
      id: 6, title: 'Jantar Secreto', author: 'Rafael Montes', coverImage: 'assets/images/jantar-secreto.jpg',
      status: 'lido'
    },
    {
      id: 7, title: 'Deixada para trás', author: 'Charlie Donlea', coverImage: 'assets/images/deixada-para-tras.jpg',
      status: 'lido'
    },
    {
      id: 8, title: 'Uma vida pequena', author: 'Hanya Yanagihara', coverImage: 'assets/images/uma-vida-pequena.jpg',
      status: 'lido'
    }
  ];

  constructor() { }
  getBooks(): Book[] {
    return this.books;
  }
}