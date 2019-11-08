import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from '../@core/auth/auth.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) { }
    routers: Routes = this.router.config[0]._loadedConfig.routes[0].children;
    ngOnInit() {
        // console.log(this.routers);
        // this.routers = this.routers.splice(1, this.routers.length + 1);
    }
}
