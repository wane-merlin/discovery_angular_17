import { Component, OnInit, inject } from '@angular/core';
import { GetAllBooksApplication } from '../../services/books.application';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dtbc-list-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})
export class ListBooksComponent implements OnInit {
    books$ = inject(GetAllBooksApplication).getAll();

    ngOnInit() {
      
    }
}
