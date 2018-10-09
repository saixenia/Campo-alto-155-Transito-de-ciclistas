import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//importo mis paginas
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { RutaPage } from '../pages/ruta/ruta';
import { PerfilPage } from '../pages/perfil/perfil';
import { TipsPage } from '../pages/tips/tips';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { MapaPage } from '../pages/mapa/mapa';
import { TabsPage } from '../pages/tabs/tabs';




@NgModule({
  declarations: [
    MyApp,
    
    LoginPage,
    SignupPage,
    RutaPage,
    PerfilPage,
    TipsPage,
    BeneficiosPage,
    MapaPage, 
    TabsPage,  
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    LoginPage,
    SignupPage,
    RutaPage,
    PerfilPage,
    TipsPage,
    BeneficiosPage,
    MapaPage,
    TabsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
