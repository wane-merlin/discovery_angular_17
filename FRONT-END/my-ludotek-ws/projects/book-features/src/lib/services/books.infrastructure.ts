import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Books } from "../models";

export interface GetAllBooks {
    getAll(): Observable<Books>
}

export const inMemoryGetAllBooks: GetAllBooks = {
    getAll: () => {
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
    getAll(): Observable<Books> {
        throw new Error("Method not implemented")
    }
}