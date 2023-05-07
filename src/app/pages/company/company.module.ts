import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanylComponent } from './company.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CompanylComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink
    ]
})
export class CompanylModule { }
