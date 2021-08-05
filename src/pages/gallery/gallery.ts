import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {GalleryService} from "../../services/gallery.service";
import 'rxjs/add/operator/map';
import {DetailImagePage} from "../detail-image/detail-image";
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle: string = "";
  totalPages: number;
  images: any = {hits: []};
  size: number = 10;
  currentPage: number = 1;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private galleryService: GalleryService,
              private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  //cette methode nous permet de recherche en mettant en parametter q pixabay
  onSearch() {

    this.images.hits = [];
    this.doSearch();

  }

  doSearch() {
    let loading=this.loadingCtrl.create({
      content:"Chargement....."
    });
    loading.present();
    return this.galleryService.chercher(this.motCle, this.size, this.currentPage)
      .subscribe(data => {
        this.totalPages = data.totalHits / this.size;
        if (this.totalPages % this.size != 0) ++this.totalPages;
        data.hits.forEach(h => {
          this.images.hits.push(h);
        });
        loading.dismiss();
      }, err => {
        loading.dismiss();
      });
  }

  doInfinite(infinite) {
    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      console.log(this.currentPage + "/" + this.totalPages)
      this.doSearch();
      infinite.complete();
    }

  }

  onDetailImage(im) {
    this.navCtrl.push(DetailImagePage, {myImage: im});
  }

}
