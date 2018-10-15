import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alertas',
  templateUrl: 'alertas.html',
})
export class AlertasPage {
  selectedItem: any;
  icons: string[];

  
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // If we navigated to this page, we will have an item available as a nav param
//      this.selectedItem = navParams.get('item');
this.items = [
  { title: 'Ilumnacion',  icon: 'ios-bulb-outline'},
  { title: 'Estado Vía', icon: 'ios-construct-outline'},
  { title: 'Seguridad', icon: 'ios-alert-outline'}
];
      // Let's populate this page with some filler content for funzies
   // this.icons = ['bulb', 'alert', 'bebuilder'];

}
}