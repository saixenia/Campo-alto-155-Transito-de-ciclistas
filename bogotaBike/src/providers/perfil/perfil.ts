import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PerfilProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PerfilProvider Provider');
  }

}
