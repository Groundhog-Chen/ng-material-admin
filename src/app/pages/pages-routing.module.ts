import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ComponnetsComponent } from './componnets/componnets.component';
import { AuthGuard } from '../@core/auth/auth.guard';
const routes: Routes = [{
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'componnets',
            component: ComponnetsComponent,
        },
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
