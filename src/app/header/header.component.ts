import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
goBackLink:boolean = false;
logInBlock:boolean = false;
logInUser:boolean = false;
contactDetail:boolean =false;
  constructor(private _header:HeaderServiceService) { 
    this._header.contactDetail.subscribe(res => {
      this.contactDetail = res
      });

      this._header.goBackLink.subscribe(res => {
      this.goBackLink = res
      });
  }

  ngOnInit() {
  }

}