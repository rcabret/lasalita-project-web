import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExhibitionDetailsComponent} from "./exhibition-details.component";
import {ViewsComponent} from "./views/views.component";
import {PressReleaseComponent} from "./press-release/press-release.component";

const routes: Routes = [
  {
    path: 'exhibitions/:id',
    component: ExhibitionDetailsComponent,
    children: [
      {
        path: 'views',
        component: ViewsComponent,
      },
      {
        path: 'press-release',
        component: PressReleaseComponent
      }
    ]
  },
  {
    path: 'programming/:id',
    component: ExhibitionDetailsComponent,
    children: [
      {
        path: 'views',
        component: ViewsComponent,
      },
      {
        path: 'press-release',
        component: PressReleaseComponent
      }
    ]
  },
  {
    path: 'fairs/:id',
    component: ExhibitionDetailsComponent,
    children: [
      {
        path: 'views',
        component: ViewsComponent,
      },
      {
        path: 'press-release',
        component: PressReleaseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitionDetailsRoutingModule { }
