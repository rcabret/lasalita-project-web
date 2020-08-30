import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../contentful-service/contentful.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public textEnglish: any;
  public textSpanish: any;
  public showSpanish: boolean;

  constructor(private _server: ContentfulService) {
    this.showSpanish = false;
  }

  async ngOnInit() {
      const r = await this._server.getAboutSection();
      this.textEnglish = r['textEnglish'];
      this.textSpanish = r['textSpanish'];
  }
}
