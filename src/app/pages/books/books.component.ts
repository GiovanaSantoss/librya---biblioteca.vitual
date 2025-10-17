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

  bookList: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.getBooks();
  }
}