import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InvoicedComponent } from "./invoice-detail.component";

@NgModule({
    declarations: [
        InvoicedComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers:[]
})
export class InvoicedModule { }
