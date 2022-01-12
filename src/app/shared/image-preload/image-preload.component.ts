import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Input} from '@angular/core';
import {opacityAnimation} from '../../animations/opacity.animation';

@Component({
  selector: 'app-preload-image',
  templateUrl: './image-preload.component.html',
  styleUrls: ['./image-preload.component.scss'],
  animations: [
    opacityAnimation
  ]
})

export class ImagePreloadComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() project: object;
  @Input() fixedRation: number;
  @Input() hideDescription: boolean;

  loaded = true;
  ratio: string;
  url: string;
  id: string;

  constructor() {
    this.id = this.generateId(20);
    if (this.hideDescription === undefined) {
      this.hideDescription = false;
    }

  }

  generateId(length): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    const imageObj = changes.data.currentValue['fields'].file
    this.preloadImage(imageObj);
  }

  private getRatio(imageObj): string {
    const {image} = imageObj.details;
    if (!image) {
      return '33%';
    }
    return `${((image.height / image.width) * 100).toFixed(3)}%`
  }

  private preloadImage(imageObj): void {
    this.url = `${imageObj.url}?q=0.5&h=300`;
    this.ratio = this.getRatio(imageObj);
    const img = new Image();
    img.src = imageObj.url;
    img.onload = () => {
      setTimeout(() => {
        this.url = imageObj.url;
      }, 300);
    };
  }
}
