import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoremgntComponent } from './store-management.component';
import {MaterialComponentsModule} from "../../material.module";
import {RouterLink} from "@angular/router";
import { InvoiceManagementService } from "../../shared";
import { CompanyService } from "../../shared";
import {ReactiveFormsModule} from "@angular/forms";
import {AddStore} from "./add-store/add-store.component";

@NgModule({
  declarations: [
    StoremgntComponent,
      AddStore
  ],
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterLink,
        ReactiveFormsModule
    ],
    providers:[InvoiceManagementService, CompanyService]
})
export class StoremgntModule { }
