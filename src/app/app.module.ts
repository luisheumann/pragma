import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';


import {LoginModule} from "./views/login/login.module";
import {UsuarioModule} from "./views/usuario/usuario.module";
import {ComicModule} from "./views/comic/comic.module";
import {ScomicModule} from "./views/comic/scomic.module";
import {DataModule} from "./views/data/data.module";

import { routing, appRoutingProviders } from './app.routes';

import { PageNotFoundComponent }    from './not-fount.component';
import ComponentOne from './component-one';


import { FriendService } from './services/user.service';
import { WikipediaService } from './views/comic/wikipedia.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponentOne
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    routing,
    DataModule,
    UsuarioModule,
    ComicModule,
    ScomicModule,
    JsonpModule
  ],
 providers: [
    appRoutingProviders,FriendService,WikipediaService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

