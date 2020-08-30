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

  loaded = false;
  ratio: string;
  url: string;
  id: string;

  constructor() {
    this.id = this.generateId(20);
    this.ratio = this.getRatio();
    if(this.hideDescription === undefined) {
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
    this.preloadImage(changes.data.currentValue['fields'].file.url);
  }

  private getRatio(img?: HTMLImageElement): string {
    if (!img) {
      const n = 60 + (Math.random() * 100);
      return `${(n).toFixed(3)}%`;
    }
    return `${((img.naturalHeight / img.naturalWidth) * 100).toFixed(3)}%`
  }

  private preloadImage(url: string): void {
    const img = new Image();
    this.url = url;
    img.src = url;
    img.onload = () => {
      const image: any = document.getElementById(this.id);
      this.ratio = this.fixedRation == undefined
        ? this.getRatio(image)
        : `${this.fixedRation}%`;
      setTimeout(() => {
        this.loaded = true;
      }, 300);
    };
  }
}
