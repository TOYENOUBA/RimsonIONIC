import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from "@ionic-native/camera";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GalleryPage} from "../pages/gallery/gallery";
import {MeteoPage} from "../pages/meteo/meteo";
import {PlacesPage} from "../pages/places/places";
import {HttpModule} from "@angular/http";
import {GalleryService} from "../services/gallery.service";
import {DetailImagePage} from "../pages/detail-image/detail-image";
import {PlacesService} from "../services/places.service";
import {NewPlacePage} from "../pages/new-place/new-place";
import {IonicStorageModule} from "@ionic/storage";
import {Geolocation} from "@ionic-native/geolocation";
import {DetailPlacePage} from "../pages/detail-place/detail-place";
//import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
    MyApp,
    HomePage,GalleryPage,MeteoPage,PlacesPage,DetailImagePage,DetailPlacePage,
    NewPlacePage
  ],
  imports: [
    BrowserModule,HttpModule,
     /*AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARS_94wzfKNCK6HruIqZXoqVr0daFF6ig'
    }),*/
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'_PlacesData',
      driverOrder:['indexeddb','sqlite','websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,GalleryPage,MeteoPage,PlacesPage,DetailImagePage,DetailPlacePage,
    NewPlacePage
  ],
  providers: [
    StatusBar,GalleryService,PlacesService,Geolocation,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
