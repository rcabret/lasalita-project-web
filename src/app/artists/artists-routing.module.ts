import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ArtistsComponent} from "./artists.component";

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule {
}
