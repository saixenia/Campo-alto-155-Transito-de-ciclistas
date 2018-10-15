import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicioTipsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicioTipsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicioTipsProvider Provider');
  }
  obtenerTip(){

    return this.http.get('/assets/tips.json');
    
  }
}
