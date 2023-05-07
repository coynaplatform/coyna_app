import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LockComponent} from "./lock/lock.component";
import {ForgotpasswodComponent} from "./forgotpasswod/forgotpasswod.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lock',
    component: LockComponent
  },
  {
    path: 'forgot-password',
    component: ForgotpasswodComponent
  },
  {
    path: 'create-account',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
