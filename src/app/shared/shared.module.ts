import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImagePreloadComponent} from "./image-preload/image-preload.component";
import {RouterModule} from "@angular/router";
import {SafePipe} from "../global-pipes/safe.pipe";

@NgModule({
  declarations: [
    ImagePreloadComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ImagePreloadComponent,
    SafePipe,
  ]
})
export class SharedModule { }
