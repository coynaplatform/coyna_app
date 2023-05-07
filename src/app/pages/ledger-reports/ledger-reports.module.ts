import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerrepComponent } from './ledger-reports.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    LedgerrepComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink
    ]
})
export class LedgerrepModule { }
