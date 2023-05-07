import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftsheetComponent } from './shift-sheet.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ShiftsheetComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ShiftsheetModule { }
