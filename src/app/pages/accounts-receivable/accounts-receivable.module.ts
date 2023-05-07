import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountrecComponent } from './accounts-receivable.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    AccountrecComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink
    ]
})
export class AccountrecModule { }
