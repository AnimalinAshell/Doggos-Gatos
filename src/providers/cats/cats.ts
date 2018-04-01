import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

/*
  Generated class for the CatsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CatsProvider {
  private url: string = "thecatapi.com/api/images/get";

  constructor(public http: HttpClient) {
    console.log("Hello CatsProvider Provider");
  }

  getCats() {
    return this.http
      .get(this.url)
      .map((res: Response) => res)
      .do(data => data);
  }
}
