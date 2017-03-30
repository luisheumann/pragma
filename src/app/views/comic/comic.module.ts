import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {comicComponent} from "./comic.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [comicComponent],
    imports     : [BrowserModule,ReactiveFormsModule],
})

export class ComicModule {}