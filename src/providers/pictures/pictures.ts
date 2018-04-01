import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";

/*
  Generated class for the PicturesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PicturesProvider {
  private url: string = "https://dog.ceo/api/breeds/image/random";

  constructor(private http: HttpClient) {
    console.log("Hello PicturesProvider Provider");
  }

  getDogs() {
    return this.http
      .get(this.url)
      .map((res: Response) => res)
      .do(data => data);
  }
}
