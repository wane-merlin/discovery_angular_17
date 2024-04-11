import { signalStore, withMethods, withState } from "@ngrx/signals";
import { Books } from "../models";
import { GetAllBooksInfrastructure } from "../services/books.infrastructure";
import { inject } from "@angular/core";

export interface BooksState {
    items: Books
}

export const initialBookState: BooksState = {
    items : []
}

export const BooksStore = signalStore(
    withState(initialBookState),
    withMethods(
        (store, bookInfra = inject(GetAllBooksInfrastructure)) => ({

    }))
)