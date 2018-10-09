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
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // If we navigated to this page, we will have an item available as a nav param
      this.selectedItem = navParams.get('item');

      // Let's populate this page with some filler content for funzies
    this.icons = ['bulb', 'alert', 'bebuilder'];

    
    this.items = [];
    for (let i = 1; i < 3; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(AlertasPage, {
      item: item
    });
  }
}