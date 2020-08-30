import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationDetailsRoutingModule } from './conversation-details-routing.module';
import { ConversationDetailsComponent } from './conversation-details.component';
import {MarkdownModule} from "ngx-markdown";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [ConversationDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConversationDetailsRoutingModule,
    MarkdownModule.forChild(),
  ]
})

export class ConversationDetailsModule { }
