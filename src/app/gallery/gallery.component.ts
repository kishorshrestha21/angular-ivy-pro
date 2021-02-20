import { Component, OnInit } from '@angular/core';
import { MyGalleryModule } from '../my-gallery/my-gallery.module';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

galleryImages = []
  constructor(private _gallery:MyGalleryModule) { }

  ngOnInit() {
    this. galleryImages = this._gallery.galleryImages
    console.log(this.galleryImages)

  }

}