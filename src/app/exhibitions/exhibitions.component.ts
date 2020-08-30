import {Component, OnInit} from '@angular/core';
import {ContentfulService} from "../contentful-service/contentful.service";

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {

  public exhibitionsList: object;
  private upcomingList = [];
  private currentList = [];
  private pastList = [];

  constructor(private _server: ContentfulService) {
  }

  async ngOnInit() {
    const r = await this._server.getExhibitions(window.location.pathname.replace('/', ''));
    const list = r['list'].map(exhibition => exhibition['fields']);
    this.exhibitionsList = this.sortExhibitions(list);
  }

  sortList(list: any): any {
    return list.sort((a, b) => {
      const one = new Date(this.convertDate(a['endDate'])).getTime();
      const two = new Date(this.convertDate(b['endDate'])).getTime();
      return two - one;
    });
  }

  convertDate(dateString: string): any {
    return new Date(dateString.replace(/-/g, '/'));
  }

  sortExhibitions(list: object[]) {
    const now = new Date();
    let i = 0;
    list.forEach(x => {
      ++i;
      const startDate = this.convertDate(x['startDate']);
      const endDate = this.convertDate(x['endDate']);

      if (x['artists'] && x['artists'].length === 1) {
        this._server.getArtistById(x['artists'][0]['sys']['id']).then(res => {
          x['artist'] = res;
        });
      }
      if (startDate > now) {
        this.upcomingList.push(x);
      } else if (now >= startDate && now <= endDate) {
        this.currentList.push(x);
      } else {
        this.pastList.push(x);
      }
      if(i === list.length) {
        this.pastList = this.sortList(this.pastList);
      }
    });

    return [
      {
        name: 'Upcoming',
        list: this.upcomingList,
      },
      {
        name: 'Current',
        list: this.currentList,
      },
      {
        name: 'Past',
        list: this.pastList,
      },
    ];
  }

  public getH1(x) {
    return (x['artist'] !== undefined
      ? x['artist']
      : x['title']);
  }

  public getUrl(x) {
    return `${window.location.pathname}/${x['url']}/views`;
  }
}
