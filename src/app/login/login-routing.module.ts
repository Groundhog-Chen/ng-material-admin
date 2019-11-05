import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from '../home/heroes.component';
import { LoginComponent } from './login.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent,
    children: [
        {
            path: 'test',
            component: HeroesComponent,
        },
        {
            path: 'test2',
            component: TestComponent,
        },
        {
            path: '',
            redirectTo: 'test',
            pathMatch: 'full',
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
