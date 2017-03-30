import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';


import {LoginModule} from "./views/login/login.module";
import {DataModule} from "./views/data/data.module";

import { routing, appRoutingProviders } from './app.routes';

import { PageNotFoundComponent }    from './not-fount.component';
import ComponentOne from './component-one';


import { FriendService } from './services/user.service';



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
    DataModule
  ],
 providers: [
    appRoutingProviders,FriendService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

