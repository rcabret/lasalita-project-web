import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConversationDetailsComponent} from "./conversation-details.component";

const routes: Routes = [
  {
    path: 'conversations/:id',
    component: ConversationDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationDetailsRoutingModule { }
