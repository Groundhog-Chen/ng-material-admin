import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { HeroesComponent } from './home/heroes.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module')
            .then(m => m.LoginModule),
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
