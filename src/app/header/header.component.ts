import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
goBackLink;
logInBlock:boolean = false;
logInUser:boolean = false;
contactDetail:boolean =false;
navBlock:boolean = true;
  constructor(private _header:HeaderServiceService) { 
    // for contact detail
    this._header.contactDetail.subscribe(res => {
      this.contactDetail = res
      });
// for go Back Link
      this._header.goBackLink.subscribe(res => {
      this.goBackLink = res
      });

      //for nav 

      this._header.navBlock.subscribe(res=> {
        this.navBlock = res;
      })
  }

  ngOnInit() {
  }

}