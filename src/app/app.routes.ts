import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-fount.component';
import { AppComponent } from './app.component';

import ComponentOne from './component-one';

import { loginComponent } from './views/login/login.component';
import { dataComponent } from './views/data/data.component';
import { usuarioComponent } from './views/usuario/usuario.component';
import { comicComponent } from './views/comic/comic.component';
import { scomicComponent } from './views/comic/scomic.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: loginComponent },
  { path: 'json', component: dataComponent },
  { path: 'usuario', component: usuarioComponent },
  { path: 'comic', component: comicComponent },
  { path: 'comic/show', component: scomicComponent },
  { path: 'component-two/:id', component: ComponentOne }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);