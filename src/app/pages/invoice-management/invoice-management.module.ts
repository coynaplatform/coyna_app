import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms";
import { InvoiceComponent } from "./invoice-management.component";
import {FinanceOnlyDirective, InvoiceManagementService, NumbersOnlyDirective,
    CharacterDirective, AlphabetOnlyDirective, CompanyService} from "../../shared";
import {MaterialComponentsModule} from "../../material.module";
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

@NgModule({
    declarations: [
        InvoiceComponent,
        NumbersOnlyDirective,
        FinanceOnlyDirective,
        CharacterDirective,
        AlphabetOnlyDirective,
        EditInvoiceComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialComponentsModule
    ],
    exports: [
        FinanceOnlyDirective,
        CharacterDirective,
        NumbersOnlyDirective
    ],
    providers: [InvoiceManagementService, CompanyService]
})
export class InvoiceManagementModule { }
