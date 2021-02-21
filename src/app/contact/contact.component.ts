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
    this._header.logInBlock.next(false);
  }
  
  ngOnDestroy(){
 this._header.contactDetail.next(false);
 this._header.logInBlock.next(true);
}
}