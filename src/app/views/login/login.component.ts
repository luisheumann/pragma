import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FriendService } from '../../services/user.service';
import 'rxjs/add/operator/map';
@Component({
	selector: 'login',
	templateUrl: 'login.template.html'
	})
export class loginComponent implements OnInit{ 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
friends: any;
people: Object[];
user: any;
datausuario: any;
	constructor( private userService: FriendService, private http: Http, private formBuilder: FormBuilder, private router: Router) {


  }





	ngOnInit() {

		

		this.form = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
			});



		this.userService.show().then(datausuario => {
			this.datausuario = datausuario
		
		});


	}




	login() {
		this.submitted = true;
		if(this.form.valid) {
		this.userService.login(this.form.value).then(user => {
				
				console.log(user)
				if (Object.keys(user).length === 0) {
					
					console.log("usuario o password no existe")
				}else{
					console.log("puede entrar")
				}

      localStorage.setItem('id_token', 'papi');
					//this.router.navigateByUrl('cliente');

				}).catch(res => {
					console.log("Error de usuario o contraseña")
					this.unauthorized = true;
					});

			}
			}
		}