import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { TestComponent } from '../test/test.component';
import { HeroesComponent } from '../home/heroes.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeroesComponent,
    TestComponent
  ],
  imports: [
    LoginRoutingModule
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
