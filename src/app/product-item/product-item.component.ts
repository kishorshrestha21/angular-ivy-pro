import { Component, OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { HeaderServiceService } from '../header-service.service';
import { MyGalleryModule } from '../my-gallery/my-gallery.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy {

galleryImages=[];
selectedItem:any;
id:any;
  constructor( 
    private _gallery:MyGalleryModule,
    private _activatedRoute: ActivatedRoute,
    private _header:HeaderServiceService

  ) { }

  ngOnInit() {
        this.galleryImages = this._gallery.galleryImages;
        this._activatedRoute.params.subscribe((params:Params)=>{
        this.id = params['id'];
        this.selectedItem = this._gallery.galleryImages[this.id-1]

        // for go back link
      this._header.goBackLink.next("Go Back To product");

      // for nav 
       this._header.navBlock.next(false);
      })
  }

   ngOnDestroy(): void {
// for go back link
      this._header.goBackLink.next('');

      // for nav 
       this._header.navBlock.next(true);
}

}