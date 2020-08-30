import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../data-service/data-service.service";

@Component({
  selector: 'app-press-release',
  templateUrl: './press-release.component.html',
  styleUrls: ['./press-release.component.scss']
})
export class PressReleaseComponent implements OnInit {

  public spanishText: any;
  public englishText: any;
  public showEnglish: boolean;
  constructor(private data: DataService) {
    this.showEnglish = true;
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(x => {
      this.spanishText = x['statementSpanish'];
      this.englishText = x['statementEnglish'];
    });
  }

}
