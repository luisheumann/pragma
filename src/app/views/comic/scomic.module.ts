import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {scomicComponent} from "./scomic.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [scomicComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class ScomicModule {}