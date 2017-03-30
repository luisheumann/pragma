import { Injectable } from '@angular/core';
import { User } from '../objects/user';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class

@Injectable()
export class FriendService { 
  constructor(private http:Http) {
  
 
  }
 data: Object;
 foods: any;
	getFriends() {
      return this.http
			.get('../people.json')
			.toPromise()
			.then(res => res.json())
			.catch() 
	}

		show() : Promise<any> {
			return this.http
			.get('http://localhost:3000/usuarios')
			.toPromise()
			.then(res => {
				return res.json()
			});

	}

		create(user: User) : Promise<any> {
			return this.http
			.post('http://localhost:3000/usuarios', user)
			.toPromise()
			.then(res => {
				return res.json()
			});

	}

		login(user: User) : Promise<any> {
		
			return this.http
			.get('http://localhost:3000/usuarios?email='+user.email+'&password='+user.password)
			.toPromise()
			.then(res => {
				return res.json()
			});

	}

			comiccreate(user: User) : Promise<any> {
			return this.http
			.post('http://localhost:3000/comics', user)
			.toPromise()
			.then(res => {
				return res.json()
			});

	}


		comicshow() : Promise<any> {
			return this.http
			.get('http://localhost:3000/comics')
			.toPromise()
			.then(res => {
				return res.json()
			});

	}

		buscar(user) : Promise<any> {
		
			return this.http
			.get('http://localhost:3000/comics?titulo='+user)
			.toPromise()
			.then(res => {
				return res.json()
			});

	}







}