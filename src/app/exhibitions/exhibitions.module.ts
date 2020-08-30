import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionsRoutingModule } from './exhibitions-routing.module';
import { ExhibitionsComponent } from './exhibitions.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [ExhibitionsComponent],
  imports: [
    CommonModule,
    ExhibitionsRoutingModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class ExhibitionsModule { }
