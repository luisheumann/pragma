import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { loginComponent } from './views/login/login.component';
import { usuarioComponent } from './views/usuario/usuario.component';
import { comicComponent } from './views/comic/comic.component';
import { scomicComponent } from './views/comic/scomic.component';
import { detalleComponent } from './views/comic/detalle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: loginComponent },
  { path: 'usuario', component: usuarioComponent },
  { path: 'comic', component: comicComponent },
  { path: 'comic/show', component: scomicComponent },
  { path: 'comic/show/:id', component: detalleComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);