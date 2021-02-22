import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

test='';
  constructor(private _header:HeaderServiceService) {
    this._header.test.subscribe(res=>{
      this.test = res;
    })
   }

  ngOnInit() {
    this._header.test.next("Hello");
  }

}