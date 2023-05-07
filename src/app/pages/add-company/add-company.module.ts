import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms";
import { CompanyComponent } from "./add-company.component";
import {CompanyService} from "../../shared";

@NgModule({
    declarations: [
        CompanyComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers:[CompanyService]
})
export class CompanyModule { }
