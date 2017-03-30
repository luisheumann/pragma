

 import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'data',
   templateUrl: 'data.template.html'
})
export class dataComponent implements OnInit {
  
  constructor (private http:Http,private router: Router) {}
  
breeds : any;



ngOnInit() { 

/*
var BAR: Foo[] = [
   { 'id': 1 },
   { 'id': 2 }
];
*/
/*
this.breeds = {friends:[]};
this.http.get('/assets/people.json').map((res: Response) => res.json()).subscribe(res => this.breeds = res);   
*/
}

}