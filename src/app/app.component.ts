import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public rainbowOn = false;
  public showEmail: boolean;

  constructor() {
    this.showEmail = false;
  }

  public getClass() {
    return this.rainbowOn ?
      'sun' : 'rainbow'
  }

  public getDate() {
    return new Date();

  }

  public onActivate(event) {
      window.scroll(0,0);
      //or document.body.scrollTop = 0;
      //or document.querySelector('body').scrollTo(0,0)
  }
}
