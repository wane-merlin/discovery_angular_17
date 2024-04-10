import { Injectable, signal } from '@angular/core';
import { initialSearchState, searchState } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchStore {
  store = signal<searchState>(initialSearchState);

  setNewValue(newState: searchState): void {
      this.store.set({... newState})
  }
}
