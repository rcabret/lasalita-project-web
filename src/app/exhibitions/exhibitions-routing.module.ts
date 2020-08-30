import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExhibitionsComponent} from "./exhibitions.component";

const routes: Routes = [
  {
    path: 'exhibitions',
    component: ExhibitionsComponent,
  },
  {
    path: 'programming',
    component: ExhibitionsComponent,
  },
  {
    path: 'fairs',
    component: ExhibitionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitionsRoutingModule { }
