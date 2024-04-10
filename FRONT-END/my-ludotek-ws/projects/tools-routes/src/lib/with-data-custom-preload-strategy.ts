import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

 
// @Injectable({
//     providedIn: 'root'
//   })
@Injectable()
export class WithDataCustomPreloadStrategy implements PreloadingStrategy {
 
    preload(route: Route, fn: () => Observable<any>) : Observable<any> {
        let result = of(null)
        if(route.data?.['preload']) {
            result = fn()
        }
        
        return result
    }

}