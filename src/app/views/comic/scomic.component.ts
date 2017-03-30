import { Component,OnInit,Pipe, PipeTransform,ChangeDetectionStrategy,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FriendService } from '../../services/user.service';
import 'rxjs/add/operator/map';



@Component({
	selector: 'scomic',
	templateUrl: 'scomic.template.html',

	})
export class scomicComponent implements OnInit { 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
	friends: any;
	people: Object[];
	user: any;
	datacomics: any;
	checkpwdStrength: any;
	private search: string;

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

  	this.userService.comicshow().then(datacomics => {
  		this.datacomics = datacomics
  		
  		});






  }



	buscar(mymodel) {
		this.submitted = true;
	
	console.log(mymodel)
		this.userService.buscar(mymodel).then(user => {
				
				console.log(user)
				if (Object.keys(user).length === 0) {
					
					

					this.datacomics =user
					this.datacomics.push("hola")
					console.log("muestra la data conseguida");
					console.log(this.datacomics)
				}else{
					console.log("puede entrar")
				}

					//this.router.navigateByUrl('cliente');

				}).catch(res => {
					console.log("Error de usuario o contraseña")
					this.unauthorized = true;
					});

			
			}

  create() {
  	//this.submitted = true;
  	if(this.form.valid) {
  		this.userService.comiccreate(this.form.value).then(user => {

  			console.log("comic creado")
  			// this.router.navigate(['login']);

  			}).catch(res => {
  				console.log("Error de usuario o contraseña")
  				this.unauthorized = true;
  				});

  		}
			}//create
}

