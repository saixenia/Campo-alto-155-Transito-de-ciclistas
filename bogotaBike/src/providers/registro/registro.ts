import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegistroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegistroProvider Provider');
  }

  obtenerCiudades(){

    return this.http.get('./assets/ciudad.json');
  }
  obtenerLocalidades(){

    return this.http.get('./assets/localides.json');
    
  }
  
}
