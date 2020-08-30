import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentfulService} from "../../contentful-service/contentful.service";
import {ActivatedRoute} from "@angular/router";
import {ViewsComponent} from "./views/views.component";
import {PressReleaseComponent} from "./press-release/press-release.component";
import {DataService} from "../../data-service/data-service.service";
import {sortByLastName} from "../../utils/sorting";

@Component({
  selector: 'app-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.scss']
})
export class ExhibitionDetailsComponent implements OnInit {

  public item: object;

  @ViewChild(ViewsComponent) views;
  @ViewChild(PressReleaseComponent) pressRelease;

  constructor(private _server: ContentfulService,
              private _route: ActivatedRoute,
              private data: DataService) {
    this.item = {};
  }

  async ngOnInit() {
    const id = this._route.snapshot.params.id;
    this.item = await this._server.getExhibitionById(id);
    if(this.item['artists'] && this.item['artists'].length) {
      this.item['artists'] = this.item['artists'].map(x=> x['fields']);
      this.item['artists'] = sortByLastName(this.item['artists']);
    }
    this.data.changeMessage(this.item);
  }

  public onActivate(event) {
    window.scroll(0,0);
  }

}
