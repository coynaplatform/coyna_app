import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './invoice-listing.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";
import { InvoiceManagementService } from "../../shared";
import { CompanyService } from "../../shared";
import {ReactiveFormsModule} from "@angular/forms";
import {InvoiceManagementModule} from "../invoice-management/invoice-management.module";

@NgModule({
  declarations: [
    AccountComponent
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink,
        ReactiveFormsModule,
        InvoiceManagementModule
    ],
    providers:[InvoiceManagementService, CompanyService]
})
export class AccountModule { }
