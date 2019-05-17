import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ChiefComponent } from './chief-component/chief.component';
import { SubordinateComponent } from './subordinate-component/subordinate.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ProjectComponent, ChiefComponent, SubordinateComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ProjectModule {
  constructor() {
    console.log( 'PROJECT MODULE' );
  }
}
