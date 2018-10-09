import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  localidades: Array<any> = [ ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private servicioRegistro: RegistroProvider) {
  }

  ionViewDidLoad() {
    
    this.servicioRegistro.obtenerLocalidades().subscribe(
      (datos: any[]) => {
        this.localidades = datos;
        console.log(this.localidades);
      }
    );
  }
  registrarse() {


  }

}
