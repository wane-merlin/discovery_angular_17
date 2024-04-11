import { Injectable, inject} from "@angular/core";
import { Observable, shareReplay, switchMap } from "rxjs";
import { Books } from "../models";
import { GetAllBooksInfrastructure } from "./books.infrastructure";
import {SearchStore} from "search"
import {toObservable} from '@angular/core/rxjs-interop'
import { BooksStore } from "../store";
 

@Injectable({
    providedIn: "root" 
})
export class GetAllBooksApplication{
    private readonly bookStore = inject(BooksStore)
    private readonly api = inject(GetAllBooksInfrastructure);
    private readonly searchStore = inject(SearchStore).store
    private readonly searchStoreObs$ = toObservable(this.searchStore)
    //private readonly getAllBooks$ = this.api.getAll().pipe(shareReplay(1))

    private readonly getAllBooks$ = this.searchStoreObs$.pipe(
                                        switchMap(item => this.api.getAll({value : item.item}))
                                        //shareReplay(1)                                    
                                    )

    getAll(): Observable<Books> {
       return this.getAllBooks$;
    }
}