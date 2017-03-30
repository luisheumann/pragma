import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {usuarioComponent} from "./usuario.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [usuarioComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class UsuarioModule {}