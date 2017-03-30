import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {dataComponent} from "./data.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [dataComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class DataModule {}