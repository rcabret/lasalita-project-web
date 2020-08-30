import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "../../contentful-service/contentful.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-conversation-details',
  templateUrl: './conversation-details.component.html',
  styleUrls: ['./conversation-details.component.scss']
})
export class ConversationDetailsComponent implements OnInit {

  public item: object;
  public spanishText: any;
  public englishText: any;
  public showEnglish = true;
  public collaborator: any;
  public artist: any;
  public showChat = false;

  constructor(private _server: ContentfulService,
              private _route: ActivatedRoute) {
    this.item = {};
  }

  async ngOnInit() {
    const id = this._route.snapshot.params.id;
    this.item = await this._server.getConversationById(id);
    if (this.item['artists'] && this.item['artists'].length) {
      this.item['artists'] = this.item['artists'].map(x => x['fields']);
      this.artist = this.item['artists'][0];
    }

    if (this.item['collaborators'] && this.item['collaborators'].length) {
      this.item['collaborators'] = this.item['collaborators'].map(x => x['fields']);
      this.collaborator = this.item['collaborators'][0];
    }

    this.englishText = this.item['textEnglish'];
    this.spanishText = this.item['textSpanish']
  }
}
