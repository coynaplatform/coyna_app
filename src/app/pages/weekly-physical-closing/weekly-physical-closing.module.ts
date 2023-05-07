import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklypcloseComponent } from './weekly-physical-closing.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    WeeklypcloseComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink
    ]
})
export class WeeklypcloseModule { }
