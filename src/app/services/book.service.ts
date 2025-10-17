import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private books: Book[] = [
    { id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', coverImage: 'assets/images/aneis.jpg' },
    { id: 2, title: 'O Guia do Mochileiro das Galáxias', author: 'Douglas Adams', coverImage: 'assets/images/mochileiro.jpg' },
    { id: 3, title: 'Duna', author: 'Frank Herbert', coverImage: 'assets/images/duna.jpg' }
  ];

  constructor() { }
  getBooks(): Book[] {
    return this.books;
  }
}