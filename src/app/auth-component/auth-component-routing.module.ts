import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthComponentComponent} from './auth-component.component';
import {AuthLoginComponent} from './auth-login/auth-login.component';
import {AuthRegisterComponent} from './auth-register/auth-register.component';
import {AuthSocialComponent} from './auth-social/auth-social.component';


const routes: Routes = [
  // example: { path: '', loadChildren: () => Module },
  // {path: '', component: AuthComponentComponent},
  {path: 'login', component: AuthLoginComponent},
  {path: 'register', component: AuthRegisterComponent},
/* example: {path: 'socialize/:status/:token/:password/:email/:id/:type', component: AuthSocialComponent},  */
  {path: 'socialize', component: AuthSocialComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthComponentRoutingModule {
  constructor() {
    console.log( '- auth Routing' );
  }
}
