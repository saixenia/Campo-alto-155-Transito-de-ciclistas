import { ServicioTipsProvider } from './../../providers/servicio-tips/servicio-tips';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleTipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-tips',
  templateUrl: 'detalle-tips.html',
})
export class DetalleTipsPage {
detalleTips=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private servicioTips:ServicioTipsProvider) {
  }

  ionViewDidLoad() {
    this.servicioTips.obtenerTip().subscribe(
      (tip: any[]) => {
      this.detalleTips = tip;
      console.log(this.detalleTips);
    })
  }

}
