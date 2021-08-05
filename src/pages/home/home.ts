import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ts-ignore
  contact={
    name:'TOGYENOUBA',
    names:'RIMTEBAYE',
    tel:'+22891454505',
    email:'togyenoubarimtebaye@gmail.com',
    photo:'assets/imgs/rim.png'

  }

  constructor(public navCtrl: NavController) {

  }

}
