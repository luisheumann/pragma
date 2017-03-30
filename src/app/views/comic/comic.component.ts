import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FriendService } from '../../services/user.service';
import 'rxjs/add/operator/map';
@Component({
	selector: 'comic',
	templateUrl: 'comic.template.html'
	})
export class comicComponent implements OnInit{ 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
friends: any;
  people: Object[];
user: any;
datausuario: any;
checkpwdStrength: any;

 //var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
   //   var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
passwordRegex: any = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})' ;
	constructor( private userService: FriendService, private http: Http, private formBuilder: FormBuilder, private router: Router) {


  }

  ngOnInit() {
  	this.form = this.formBuilder.group({
  		titulo: ['', Validators.required],
  		descripcion: ['', Validators.required],
  		comentario: ['', Validators.required]
  		});

  	this.userService.show().then(datausuario => {
  		this.datausuario = datausuario
  		console.log(this.datausuario)
  		});


      

  }


  create() {
  	//this.submitted = true;
  	if(this.form.valid) {
  		this.userService.comiccreate(this.form.value).then(user => {

  			console.log("comic creado")
  			this.router.navigate(['comic/show']);

  			}).catch(res => {
  				console.log("Error de usuario o contraseña")
  				this.unauthorized = true;
  				});

  		}
			}//create
}