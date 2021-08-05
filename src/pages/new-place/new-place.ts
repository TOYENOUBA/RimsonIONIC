import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from "../../services/places.service";
import {Place} from "../../model/place.model";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public placesService:PlacesService,
              public geolocation:Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(place:Place) {
    place.location={longitude:0,latitude:0};
    place.timestamp=new Date().getTime();
    this.geolocation.getCurrentPosition()
      .then(position=>{
        place.location.longitude=position.coords.longitude;
        place.location.latitude=position.coords.latitude;
        this.placesService.addPlace(place);
        this.navCtrl.pop();
      })
      .catch(err=>{
        place.location.longitude=0;
        place.location.latitude=0;
        this.placesService.addPlace(place);
        this.navCtrl.pop();
      })

  }
}
