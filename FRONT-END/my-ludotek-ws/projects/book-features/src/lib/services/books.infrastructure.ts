import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";

export interface BookFilter {
    value: string
}

export interface GetAllBooks {
    getAll(filter: BookFilter): Observable<Books>
}

export const inMemoryGetAllBooks: GetAllBooks = {
    getAll: (filter: BookFilter) => {
        const table: Books = [
            {
                id: 1,
                title: "Dune",
                author: {
                    name: "Frank Herbert"
                }
            },
            {
                id: 2,
                title: "lewayne",
                author: {
                    name: "Cena Jhon"
                }
            }
    ];

        return of(table).pipe(delay(1500))
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