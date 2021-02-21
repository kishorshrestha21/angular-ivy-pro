import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
goBackLink;
logInBlock;
logInUser:boolean = true;
contactDetail;
navBlock;
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
//login block
      this._header.logInBlock.subscribe(res=>{
        this.logInBlock =res
      })

      this._header.logInUser.subscribe(res=> this.logInUser = res)
  }

  ngOnInit() {
  }

}