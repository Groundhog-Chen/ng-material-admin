import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { LoginRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponnetsComponent } from './componnets/componnets.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ComponnetsComponent
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    bootstrap: [PagesComponent]
})
export class PagesModule { }
