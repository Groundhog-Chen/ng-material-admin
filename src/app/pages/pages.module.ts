import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


import { LoginRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        MatButtonModule
    ],
    bootstrap: [PagesComponent]
})
export class PagesModule { }
