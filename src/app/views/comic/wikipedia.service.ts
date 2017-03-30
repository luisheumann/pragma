import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/Rx";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WikipediaService {
  
  constructor(private jsonp: Jsonp) {}
  
  search(terms: Observable<string>, debounceDuration = 400) {
    return terms.debounceTime(debounceDuration)
                .distinctUntilChanged()
                .switchMap(term => this.rawSearch(term));
  }
  
    rawSearch (term: string) {
   
        if (Object.keys(term).length === 0) {
          
          

          return term

      
          
        }else{
          console.log("puede entrar")
        }

          //this.router.navigateByUrl('cliente');

        
  }
}