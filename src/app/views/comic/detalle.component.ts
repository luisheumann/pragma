import { Component,OnInit,Pipe, PipeTransform,ChangeDetectionStrategy,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { FriendService } from '../../services/user.service';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
	selector: 'detalle',
	templateUrl: 'detalle.template.html',

	})
export class detalleComponent implements OnInit { 

	form: FormGroup;
	submitted: boolean = false;
	unauthorized: boolean = false;
	friends: any;
	people: Object[];
	user: any;
	datacomics: any;
	checkpwdStrength: any;
	private search: string;
	private sub: any;
	id: any;


   constructor( private route: ActivatedRoute, private userService: FriendService, private http: Http, private formBuilder: FormBuilder, private router: Router) {


   }

   ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

      console.log(this.id)
    });


   	this.form = this.formBuilder.group({
   		titulo: ['', Validators.required],
   		descripcion: ['', Validators.required],
   		comentario: ['', Validators.required]
  		});

  	this.userService.detalle(this.id).then(datacomics => {
  		this.datacomics = datacomics
  		
  		});

  }


   Nuevo () {
    this.router.navigate(['/comic']);
  }

  buscar(mymodel) {
  	this.submitted = true;

  	console.log(mymodel)
  	this.userService.buscar(mymodel).then(user => {

  		console.log(user)
  		if (Object.keys(user).length === 0) {


  			this.userService.comicshow().then(datacomics => {
  				this.datacomics = datacomics

  				});

  			}else{

  				this.datacomics =user

  			}

					//this.router.navigateByUrl('cliente');

					}).catch(res => {
						console.log("Error de usuario o contraseña")
						this.unauthorized = true;
						});


				}

  create() {
  
  	if(this.form.valid) {
  		this.userService.comiccreate(this.form.value).then(user => {

  			console.log("comic creado")
  			

  			}).catch(res => {
  				console.log("Error de usuario o contraseña")
  				this.unauthorized = true;
  				});

  		}
			}//create
}

