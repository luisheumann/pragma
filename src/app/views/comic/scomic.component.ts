///////////////////////////////
///By: LUIS HEUMANN
///Email: luisheumann@gmail.com
///////////////////////////////
import { Component,OnInit,Pipe, PipeTransform,ChangeDetectionStrategy,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators }  from '@angular/forms';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';
import { PagerService } from '../../services/index'
import { Observable } from 'rxjs/Observable';



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
  pagina: any;

  constructor( private pagerService: PagerService, private userService: UserService, private http: Http, private formBuilder: FormBuilder, private router: Router) {

  }

  private allItems: any[];
  pager: any = {};
  pagedItems: any[];

  ngOnInit() {
    this.form = this.formBuilder.group({
     titulo: ['', Validators.required],
     descripcion: ['', Validators.required],
     comentario: ['', Validators.required]
     });

    this.userService.comicshow().then(datacomics => {
      this.datacomics = datacomics

      this.allItems = datacomics;
      this.setPage(1);

// Validacion si hay mas de 10 activa la paginacion
if (Object.keys(datacomics).length > 10) {

  this.pagina = true;
  }else{
    this.pagina = false;
  }

  });

  }
  setPage(page: number) {
            if (page < 1 || page > this.pager.totalPages) {
                  return;
            }
     
            this.pager = this.pagerService.getPager(this.allItems.length, page);   
            this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
      }


// URL NUEVO COMICS
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
    this.pagedItems = datacomics
    });
   }else{

    this.pagedItems = user
  }

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

