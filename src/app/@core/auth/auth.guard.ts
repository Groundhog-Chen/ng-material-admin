import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router, private authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkPermission();
    }
    canActivateChild(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log('CanActivateChild', router, state);
        return this.canActivate(router, state);
    }
    checkPermission(): boolean {
        if (!this.authService.isLoggedIn) {
            this.router.navigateByUrl('/401');
        }
        return true;
    }
}
