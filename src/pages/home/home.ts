import { PicturesProvider } from './../../providers/pictures/pictures';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pics = [];

  constructor(public navCtrl: NavController, public http: Http, private pictures: PicturesProvider) {
   this.getPictures();
  }

  getPictures(){
    for (let index = 0; index < 20; index++) {
      this.pictures.getPictures().subscribe(data => this.pics.push(data));      
    }
  }
}
