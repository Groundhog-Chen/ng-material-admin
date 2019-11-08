import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { Router } from '@angular/router';
import { AuthService } from '@/app/@core/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(public router: Router, public authService: AuthService) { }
    mlmlh = false;
    login() {
        this.authService.login().subscribe(() => {
            if (this.authService.isLoggedIn) {
                this.mlmlh = true;
                this.router.navigateByUrl('/pages/dashboard');
            }
        });
    }

    logout() {
        this.authService.logout();
    }

}
