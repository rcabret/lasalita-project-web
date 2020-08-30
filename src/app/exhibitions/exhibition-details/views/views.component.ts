import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../data-service/data-service.service";

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit{

  public images: any;

  constructor(private data: DataService) {
  }

  ngOnInit() {
      this.data.currentMessage.subscribe(x => {
        this.images = x['images'];
        console.log('images', this.images);
      });
  }



}
