import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-image',
  templateUrl: 'detail-image.html',
})
export class DetailImagePage {
  image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=this.navParams.data.myImage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailImagePage');
  }

}
