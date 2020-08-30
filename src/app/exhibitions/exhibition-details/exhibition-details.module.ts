import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitionDetailsRoutingModule } from './exhibition-details-routing.module';
import { ExhibitionDetailsComponent } from './exhibition-details.component';
import { ViewsComponent } from './views/views.component';
import { PressReleaseComponent } from './press-release/press-release.component';
import {SharedModule} from "../../shared/shared.module";
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [ExhibitionDetailsComponent, ViewsComponent, PressReleaseComponent],
  imports: [
    CommonModule,
    ExhibitionDetailsRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),

  ],
})
export class ExhibitionDetailsModule { }
