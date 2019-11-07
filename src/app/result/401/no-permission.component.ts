import { Component } from '@angular/core';
import { AuthService } from '../../@core/auth/auth.service';

@Component({
    selector: 'app-no-permission',
    template: '<h1>401 No permission please sign in sign status {{ authService.isLoggedIn }}</h1>'
})
export class NoPermissionComponent {
    constructor( private authService: AuthService ) {}
}
