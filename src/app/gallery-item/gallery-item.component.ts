import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HeaderServiceService } from "../header-service.service";
import { MyGalleryModule } from "../my-gallery/my-gallery.module";

@Component({
  selector: "app-gallery-item",
  templateUrl: "./gallery-item.component.html",
  styleUrls: ["./gallery-item.component.css"]
})
export class GalleryItemComponent implements OnInit, OnDestroy {
  galleryImages = [];
  selectedItem: any;
  id: any;
  constructor(
    private _header: HeaderServiceService,
    private _gallery: MyGalleryModule,
    private _activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.galleryImages = this._gallery.galleryImages;
    // console.log(this.galleryImages)
    this._activedRoute.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this.selectedItem = this._gallery.galleryImages[this.id - 1];
      console.log(this.id);
      console.log(this.galleryImages.length);

      // for go back link
      this._header.goBackLink.next({
        text: "Back to Gallery",
        url: "/gallery"
      });

      // for nav
      this._header.navBlock.next(false);
    });
  }

  ngOnDestroy(): void {
    // for go back link
    this._header.goBackLink.next({ text: "", url: "" });

    // for nav
    this._header.navBlock.next(true);
  }
  onNext() {
    // fom image next
    if (this.id < this.galleryImages.length) {
      this.id = this.id + 1;
      this.selectedItem = this._gallery.galleryImages[this.id - 1];
      console.log(this.id);
      console.log(this.galleryImages.length);
    } else {
      this.id = 0;
    }
  }

  onPrevious() {
    if (this.id > 1) {
      this.id = this.id - 1;
      this.selectedItem = this._gallery.galleryImages[this.id - 1];
      console.log(this.id);
      console.log(this.galleryImages.length);
    } else {
      this.id = this.galleryImages.length + 1;
    }
  }
}
