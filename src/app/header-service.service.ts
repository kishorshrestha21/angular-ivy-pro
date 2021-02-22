import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderServiceService {

contactDetail=new BehaviorSubject(false); //for header contact detail

//for goBackLink
goBackLink = new BehaviorSubject ({text: '', url:''});


// nav
 navBlock = new BehaviorSubject (true);

 logInBlock= new BehaviorSubject (true);

logInUser= new BehaviorSubject ('');

//  test for about Page

test= new BehaviorSubject ('');
  constructor() { }

}
