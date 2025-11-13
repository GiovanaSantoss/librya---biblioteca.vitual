import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  readList: Book[] = [];
  readingList: Book[] = [];
  toBeReadList: Book[] = [];

  allBooks: Book[] = [];
  isModalOpen = false;
  bookForm!: FormGroup;

  editingBookId: number | null = null;
  modalTitle = 'Adicionar Novo Livro';
  private scrollPosition = 0; // guarda posição de rolagem

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadBooks();

    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required]],
      coverImage: ['', [Validators.required]],
      sinopse: ['', [Validators.required, Validators.minLength(10)]],
      status: ['toBeRead', [Validators.required]],
      rating: [0],
      favorite: [false]
    });
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.allBooks = books;
      this.readList = books.filter(b => b.status === 'lido');
      this.readingList = books.filter(b => b.status === 'lendo');
      this.toBeReadList = books.filter(b => b.status === 'toBeRead');
    });
  }

  
  // --- Abrir modal (novo livro)
  addBook(): void {
    this.scrollPosition = window.scrollY;
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.style.position = 'fixed';
    document.body.classList.add('modal-open');

    this.modalTitle = 'Adicionar Novo Livro';
    this.isModalOpen = true;
    this.editingBookId = null;
    this.bookForm.reset({ status: 'toBeRead', rating: 0, favorite: false });
  }

  // --- Abrir modal (editar)
  editBook(book: Book): void {
    this.scrollPosition = window.scrollY;
    document.body.style.top = `-${this.scrollPosition}px`;
    document.body.classList.add('modal-open');

    this.modalTitle = 'Editar Livro';
    this.isModalOpen = true;
    this.editingBookId = book.id;

    this.bookForm.patchValue({
      title: book.title,
      author: book.author,
      coverImage: book.coverImage,
      sinopse: book.sinopse,
      status: book.status,
      rating: book.rating || 0,
      favorite: book.favorite || false
    });
  }

  // --- Fechar modal
  closeModal(): void {
    this.isModalOpen = false;

    // restaura rolagem
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, this.scrollPosition);
    document.body.classList.remove('modal-open');
  }

  saveBook(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const bookData = this.bookForm.value;

    if (this.editingBookId) {
      this.bookService.updateBook(this.editingBookId, bookData).subscribe(() => {
        this.loadBooks();
        this.closeModal();
      });
    } else {
      this.bookService.addBook(bookData).subscribe(() => {
        this.loadBooks();
        this.closeModal();
      });
    }
  }

  deleteBook(id: number): void {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
      this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
    }
  }

  setRating(book: Book, stars: number): void {
    book.rating = stars;
    this.bookService.updateBook(book.id, book).subscribe(() => this.loadBooks());
  }

  toggleFavorite(book: Book): void {
    book.favorite = !book.favorite;
    this.bookService.updateBook(book.id, book).subscribe(() => this.loadBooks());
  }

  // --- Dentro do modal
  setFormRating(stars: number): void {
    this.bookForm.patchValue({ rating: stars });
  }

  toggleFormFavorite(): void {
    const current = this.bookForm.get('favorite')?.value;
    this.bookForm.patchValue({ favorite: !current });
  }
}
