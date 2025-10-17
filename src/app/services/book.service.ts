import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private books: Book[] = [
    { id: 1, title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', coverImage: 'https://via.placeholder.com/150/1976D2/FFFFFF?Text=SdA' },
    { id: 2, title: 'O Guia do Mochileiro das Galáxias', author: 'Douglas Adams', coverImage: 'https://via.placeholder.com/150/8BC34A/FFFFFF?Text=Guia' },
    { id: 3, title: 'Duna', author: 'Frank Herbert', coverImage: 'https://via.placeholder.com/150/FFC107/000000?Text=Duna' }
  ];

  constructor() { }
  getBooks(): Book[] {
    return this.books;
  }
}