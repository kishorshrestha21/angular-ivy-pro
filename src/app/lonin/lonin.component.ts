import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lonin',
  templateUrl: './lonin.component.html',
  styleUrls: ['./lonin.component.css']
})
export class LoninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignIn(username){
    alert(username.value);
  }

}