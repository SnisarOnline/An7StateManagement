import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';

import { MaterialModule } from './material/material.module';
import {LimitSymbols} from './pipes/limitation_symbols.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    // FormsModule, ReactiveFormsModule
  ],
  declarations: [
    LimitSymbols,
  ],
  exports: [
    MaterialModule,
    LimitSymbols,
  ],
  entryComponents: [],
})
export class SharedModule {}
