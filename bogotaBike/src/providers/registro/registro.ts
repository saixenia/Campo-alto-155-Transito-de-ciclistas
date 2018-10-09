import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegistroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegistroProvider Provider');
  }

  obtenerLocalidades(){

    return this.http.get('assets/localidades.json');
    
  }
}
