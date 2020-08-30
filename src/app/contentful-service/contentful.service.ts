import {Injectable} from '@angular/core';
import * as contentful from 'contentful';


@Injectable()
export class ContentfulService {

  client: any;

  constructor() {
    this.client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: '5ft1iznubs8x',
      accessToken: 'BqYqH6y6bc5VzOkgpE_GHggnA8djxKhOZra5hVFhtYM'
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    });
  }

  public getExhibitions(id: string): Promise<object> {
    return this.client.getEntries({
      content_type: 'list',
      'fields.title': id,
    }).then(r => r.items[0].fields);
  }

  public getExhibitionById(id: string): Promise<object> {
    return this.client.getEntries({
      content_type: 'exhibition',
      'fields.url': id,
    }).then(r => r.items[0].fields);
  }

  public getConversationById(id: string): Promise<object> {
    return this.client.getEntries({
      content_type: 'conversation',
      'fields.url': id,
    }).then(r => r.items[0].fields);
  };

  public getAboutSection(): Promise<object> {
    return this.client.getEntries({
      content_type: 'about'
    }).then(r => r.items[0].fields);
  }

  public getArtists(): Promise<any> {
    return this.client.getEntries({
      content_type: 'artist',
    }).then(r => r.items);
  }

  public getArtistById(id: string): Promise<object> {
    return this.client.getEntries({
      'sys.id': id
    }).then(r => r.items[0]['fields']['name']);
  }

}














