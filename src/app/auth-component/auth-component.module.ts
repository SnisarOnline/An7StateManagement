import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponentRoutingModule } from './auth-component-routing.module';
import { AuthComponentComponent } from './auth-component.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthSocialComponent } from './auth-social/auth-social.component';

@NgModule({
  declarations: [AuthComponentComponent, AuthLoginComponent, AuthRegisterComponent, AuthSocialComponent],
  imports: [
    CommonModule,
    AuthComponentRoutingModule
  ]
})
export class AuthComponentModule {
  constructor() {
    console.log( 'AUTH MODULE' );
  }
}
