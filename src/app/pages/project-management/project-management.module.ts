import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjmgntComponent } from './project-management.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ProjmgntComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink
    ]
})
export class ProjmgntModule { }
