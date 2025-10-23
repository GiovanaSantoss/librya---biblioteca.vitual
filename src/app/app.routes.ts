import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', component: BooksComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
];