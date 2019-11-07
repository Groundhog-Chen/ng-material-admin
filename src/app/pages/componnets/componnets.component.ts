import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-componnets',
    templateUrl: './componnets.component.html',
    styleUrls: ['./componnets.component.scss']
})
export class ComponnetsComponent {

    constructor(private location: Location) { }
    goBack(): void {
        this.location.back();
    }

}
