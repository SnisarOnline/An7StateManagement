import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthComponentModule } from './auth-component/auth-component.module';
import { ProjectModule } from './project/project.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthComponentModule, ProjectModule, // подключенные модули перед роутингом
    AppRoutingModule, // в конце
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
