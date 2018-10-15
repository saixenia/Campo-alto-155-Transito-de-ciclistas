import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { Subscriber } from 'rxjs/Subscriber';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  ciudades=[];
  localidades=[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private servicioRegistro: RegistroProvider) {
  }

  ionViewDidLoad() {
    
    this.servicioRegistro.obtenerLocalidades().subscribe(
      (datos: any[]) => {this.localidades = datos;
        console.log(this.localidades);},

        (error)=>{console.log(error);}
    ); 
    
  }
  registrarse() {

    this.navCtrl.push(TabsPage);


  }

}
