import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books', // Seletor do componente
  standalone: true, // Define o componente como standalone
  imports: [CommonModule], // Importa CommonModule para usar diretivas comuns do Angular
  templateUrl: './books.component.html', // Template HTML do componente
  styleUrls: ['./books.component.css'] // Estilos específicos para este componente
})
export class BooksComponent implements OnInit {

  readList: Book[] = [];
  readingList: Book[] = [];
  toBeReadList: Book[] = [];

  allBooks: Book[] = [];
  isModalOpen = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    const allBooks = this.bookService.getBooks();

    this.readList = allBooks.filter(book => book.status === 'lido');
    this.readingList = allBooks.filter(book => book.status === 'lendo');
    this.toBeReadList = allBooks.filter(book => book.status === 'toBeRead');   
  }

  addBook(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    console.log('Adicionar livro');
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; 
  }
}



