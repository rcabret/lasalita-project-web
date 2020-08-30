import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationModule} from "./navigation/navigation.module";
import {ExhibitionsModule} from "./exhibitions/exhibitions.module";
import {ExhibitionDetailsModule} from "./exhibitions/exhibition-details/exhibition-details.module";
import {AboutModule} from "./about/about.module";
import {ArtistsModule} from "./artists/artists.module";
import {ContentfulService} from "./contentful-service/contentful.service";
import {MarkdownModule, MarkedRenderer, MarkedOptions} from 'ngx-markdown';
import {DataService} from "./data-service/data-service.service";
import {ConversationsModule} from "./conversations/conversations.module";
import {ConversationDetailsModule} from "./conversations/conversation-details/conversation-details.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.image = (href: string) => {
    return `<img src="${href}" onload="this.style.opacity = 1"/>`;
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ArtistsModule,
    AboutModule,
    BrowserModule,
    ConversationsModule,
    ConversationDetailsModule,
    ExhibitionsModule,
    ExhibitionDetailsModule,
    MarkdownModule.forRoot({
        markedOptions: {
          provide: MarkedOptions,
          useFactory: markedOptionsFactory,
        },
      }
    ),
    NavigationModule,
  ],
  providers: [
    ContentfulService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
