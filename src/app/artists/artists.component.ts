import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "../contentful-service/contentful.service";
import {sortByLastName} from "../utils/sorting";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  public artistList: any;

  constructor(private _server: ContentfulService) {
  }

  async ngOnInit() {
    const r = await this._server.getArtists();

    this.artistList = r.map(x => x['fields']);
    this.artistList = sortByLastName(this.artistList);
  }
}
