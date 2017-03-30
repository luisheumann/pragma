import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {detalleComponent} from "./detalle.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [detalleComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class DetalleModule {}