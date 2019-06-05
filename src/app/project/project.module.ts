import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ChiefComponent } from './component/chief/chief.component';
import { SubordinateComponent } from './component/subordinate/subordinate.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {messageReducer} from './_store-ngRx/reducers/message.reducers';

@NgModule({
  declarations: [ProjectComponent, ChiefComponent, SubordinateComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({ projectStore: messageReducer }),
  ]
})
export class ProjectModule {
  constructor() {
    console.log( 'PROJECT MODULE' );
  }
}
