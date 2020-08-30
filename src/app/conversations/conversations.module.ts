import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationsRoutingModule } from './conversations-routing.module';
import { ConversationsComponent } from './conversations.component';

@NgModule({
  declarations: [ConversationsComponent],
  imports: [
    CommonModule,
    ConversationsRoutingModule,
  ]
})
export class ConversationsModule { }
