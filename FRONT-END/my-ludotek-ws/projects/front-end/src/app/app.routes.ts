import { Routes } from '@angular/router'; 

export const routes: Routes = [
    //{path: "books", component: ListBooksComponent } 
    {
        path: "books", 
        loadChildren: () => import('book-features').then(item => item.booksRoutes),
        data : { preload: true }
    }
];
