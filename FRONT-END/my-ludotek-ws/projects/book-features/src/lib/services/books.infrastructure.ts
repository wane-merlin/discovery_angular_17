import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";
import { bookTable } from "./fake";

export interface BookFilter {
    value: string
}

export interface GetAllBooks {
    getAll(filter: BookFilter): Observable<Books>
}

export const inMemoryGetAllBooks: GetAllBooks = {
    getAll: (filter: BookFilter) => { 
        const filterTable = bookTable.filter(item =>item.title.toLocaleLowerCase().startsWith(filter.value.toLocaleLowerCase()))
        return of(filterTable).pipe(delay(1500))
    }
}

export const mockinFactory = () => inMemoryGetAllBooks

@Injectable({
    providedIn: "root",
    useFactory: mockinFactory
})
export class GetAllBooksInfrastructure implements GetAllBooks{
    getAll(filter: BookFilter): Observable<Books> {
        throw new Error("Method not implemented")
    }
}