import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-lonin',
  templateUrl: './lonin.component.html',
  styleUrls: ['./lonin.component.css']
})
export class LoninComponent implements OnInit {

  constructor(
    private _header:HeaderServiceService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onSignIn(username, password){
    // alert(username.value);
    if(password.value == '123'){
    this._header.logInUser.next(username.value);
    this.router.navigate(['home'])
    }
    else{
      alert("Password is 123");
    }
 
  }

}