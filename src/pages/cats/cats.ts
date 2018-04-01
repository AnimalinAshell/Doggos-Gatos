import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CatsProvider } from "./../../providers/cats/cats";
import { Http } from "@angular/http";

@Component({
  selector: "page-about",
  templateUrl: "cats.html"
})
export class CatsPage {
  pics = [];

  constructor(
    public navCtrl: NavController,
    public http: Http,
    private pictures: CatsProvider
  ) {
    this.getCats();
  }

  getCats() {
    this.pictures.getCats().subscribe(data => this.pics.push(data));
  }
}
