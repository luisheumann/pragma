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
import {DetalleModule} from "./views/comic/detalle.module";
import { routing, appRoutingProviders } from './app.routes';
import { UserService } from './services/user.service';
import { PagerService } from './services/index'

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    routing,
    UsuarioModule,
    ComicModule,
    ScomicModule,
    JsonpModule,
    DetalleModule
  ],
 providers: [
    appRoutingProviders,UserService,PagerService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

