import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderServiceService {

contactDetail=new BehaviorSubject(false); //for header contact detail

//for goBackLink
goBackLink = new BehaviorSubject ('');


// nav
 navBlock = new BehaviorSubject (true);


  constructor() { }

}