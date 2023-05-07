import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../service/apis/auth.service';
import { BrowserDB } from "../helper/browserDB";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        public auth: AuthService,
        public router: Router,
        public browserDb: BrowserDB
    ) {}
    canActivate(): boolean {
        // console.log('is AuthGuard', this.auth.isAuthenticated())
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}