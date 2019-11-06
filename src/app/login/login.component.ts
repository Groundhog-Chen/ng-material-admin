import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }
    arr = [
        {
            id: 1,
            name: 'hhh'
        },
        {
            id: 2,
            name: 'aaa'
        },
    ];
    ngOnInit() {
    }

}
