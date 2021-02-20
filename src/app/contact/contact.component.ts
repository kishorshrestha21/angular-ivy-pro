import { Component, OnDestroy,  OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private _header:HeaderServiceService) { }



  ngOnInit() {
    this._header.contactDetail.next(true);
  }
  
  ngOnDestroy(){
 this._header.contactDetail.next(false);
}
}