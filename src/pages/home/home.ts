

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  name:string = '';
  city:string = '';
  constructor(private navCtrl: NavController) {
    
  }

  
}
