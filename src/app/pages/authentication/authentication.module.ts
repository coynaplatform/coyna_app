import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import  { LoginComponent } from "./login/login.component";
import  { LockComponent } from "./lock/lock.component";
import  { ForgotpasswodComponent } from "./forgotpasswod/forgotpasswod.component";
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../shared";

@NgModule({
  declarations: [
    LoginComponent,
    LockComponent,
    ForgotpasswodComponent,
    CreateComponent
  ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule
    ],
    providers:[UserService]
})
export class AuthenticationModule { }
