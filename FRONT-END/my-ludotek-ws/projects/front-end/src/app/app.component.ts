import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {SearchComponent} from 'search'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
    title = signal<string>('loading ...')

    ngOnInit(): void{
      this.title.set('Ma ludoteck')
    }

    changeTitle(){
      this.title.set(new Date().toString())
    }
}
