import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-fount.component';
import { AppComponent } from './app.component';

import ComponentOne from './component-one';

import { loginComponent } from './views/login/login.component';
import { dataComponent } from './views/data/data.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: loginComponent },
  { path: 'json', component: dataComponent },
  { path: 'component-two/:id', component: ComponentOne }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);