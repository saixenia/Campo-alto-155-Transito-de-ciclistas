import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//import mis paginas
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { title: 'Editar Perfil', component: PerfilPage, icon: 'ios-log-out-outline'},
      { title: 'Salir', component: LoginPage, icon: 'ios-create-outline'}
    ];
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });
  }

  openPage(page){
      
    this.nav.setRoot(page.component);
  }
}

