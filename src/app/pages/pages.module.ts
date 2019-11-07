import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


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
        MatButtonModule
    ],
    bootstrap: [PagesComponent]
})
export class PagesModule { }
