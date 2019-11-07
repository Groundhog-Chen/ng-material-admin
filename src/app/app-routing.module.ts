import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './result/404/page-not-found.component';
import { NoPermissionComponent } from './result/401/no-permission.component';

const routes: Routes = [
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module')
            .then(m => m.PagesModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '401',
        component: NoPermissionComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
