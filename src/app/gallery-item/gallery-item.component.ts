import { Component, OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeaderServiceService } from '../header-service.service';
import { MyGalleryModule } from '../my-gallery/my-gallery.module';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit, OnDestroy {
galleryImages = [];
selectedItem:any;
id:any;
  constructor(
    private _header:HeaderServiceService,
    private _gallery:MyGalleryModule,
    private _activedRoute:ActivatedRoute
    ) { }


  ngOnInit() {
    this. galleryImages = this._gallery.galleryImages;
    // console.log(this.galleryImages)
    this._activedRoute.params.subscribe((params:Params)=>{
    this.id = params['id'];
    this.selectedItem =this._gallery.galleryImages[this.id -1]
      // console.log(this.id);

// for go back link
      this._header.goBackLink.next({text: 'Back to Gallery', url:'/gallery'});

      // for nav 
       this._header.navBlock.next(false);
    })

  }

  ngOnDestroy(): void {
// for go back link
      this._header.goBackLink.next({text: '', url:''});

      // for nav 
       this._header.navBlock.next(true);
}
onNext(){
  alert("hello")
   

}

}

