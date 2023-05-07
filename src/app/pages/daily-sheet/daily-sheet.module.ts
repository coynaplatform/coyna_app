import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepdailysheetComponent } from './daily-sheet.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    DepdailysheetComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink
    ]
})
export class DepdailysheetModule { }
