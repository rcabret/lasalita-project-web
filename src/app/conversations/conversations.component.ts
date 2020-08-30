import { Component, OnInit } from '@angular/core';
import {ContentfulService} from "../contentful-service/contentful.service";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})
export class ConversationsComponent implements OnInit {

  conversations: any;

  constructor(private _server: ContentfulService) {
  }

  async ngOnInit() {
    const r = await this._server.getExhibitions(window.location.pathname.replace('/', ''));
    this.conversations  = r['list'].map(exhibition => exhibition['fields']);
    this.conversations = this.sortList(this.conversations);
  }

  public getUrl(x) {
    return `${window.location.pathname}/${x['url']}`;
  }

  private sortList(list: any): any {
    return list.sort((a, b) => {
      const one = new Date(this.convertDate(a['date'])).getTime();
      const two = new Date(this.convertDate(b['date'])).getTime();
      return  two - one;
    });
  }

  private convertDate(dateString: string): any {
    return new Date(dateString);
    //return new Date(dateString.replace(/-/g, '/'));
  }
}
