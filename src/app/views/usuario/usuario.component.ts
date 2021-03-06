///////////////////////////////
///By: LUIS HEUMANN
///Email: luisheumann@gmail.com
///////////////////////////////
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/map';



@Component({
	selector: 'usuario',
	templateUrl: 'usuario.template.html'
	})
export class usuarioComponent implements OnInit{ 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
friends: any;
  people: Object[];
user: any;
datausuario: any;
checkpwdStrength: any;

	constructor( private userService: UserService, private http: Http, private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit() {
  	this.form = this.formBuilder.group({
  		nombre: ['', Validators.required],
  		pais: ['', Validators.required],
  		email: ['', Validators.required],
  		password: ['', Validators.required]
  		});

  	this.userService.show().then(datausuario => {
  		this.datausuario = datausuario
  		console.log(this.datausuario)
  		});
  }

  create() {
 
  	if(this.form.valid) {
  		this.userService.create(this.form.value).then(user => {

  			console.log("usuario registrado")
  			 this.router.navigate(['login']);

  			}).catch(res => {
  				console.log("Error de usuario o contraseña")
  				this.unauthorized = true;
  				});

  		}
			}//create
}