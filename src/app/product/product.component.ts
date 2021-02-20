import { Component, OnInit } from '@angular/core';
import { MyGalleryModule } from '../my-gallery/my-gallery.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

galleryImages = [];
  constructor(private _gallery:MyGalleryModule) { }

  ngOnInit() {
    this.galleryImages = this._gallery.galleryImages;
  }

}