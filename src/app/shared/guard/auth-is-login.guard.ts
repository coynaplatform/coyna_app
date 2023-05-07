import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../service/apis/auth.service';
@Injectable()
export class IsLoginAuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}
    canActivate(): boolean {
        // console.log('IsLoginAuthGuard', this.auth.isAuthenticated())
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['dashboard']);
            return false;
        }
        return true;
    }
}