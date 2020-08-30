import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConversationsComponent} from "./conversations.component";

const routes: Routes = [
  {
    path: 'conversations',
    component: ConversationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationsRoutingModule { }
