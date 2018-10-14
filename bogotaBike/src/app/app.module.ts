import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//importo mis paginas
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { RutaPage } from '../pages/ruta/ruta';
import { PerfilPage } from '../pages/perfil/perfil';
import { TipsPage } from '../pages/tips/tips';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { MapaPage } from '../pages/mapa/mapa';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilProvider } from '../providers/perfil/perfil';
import { RegistroProvider } from '../providers/registro/registro';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertasPage } from '../pages/alertas/alertas';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
   // LoginPage,
    SignupPage,
    ResetPasswordPage,
    RutaPage,
    PerfilPage,
    TipsPage,
    BeneficiosPage,
    MapaPage,
    AlertasPage,
    TabsPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
   // LoginPage,
    SignupPage,
    ResetPasswordPage,
    RutaPage,
    PerfilPage,
    TipsPage,
    BeneficiosPage,
    MapaPage,
    AlertasPage,
    TabsPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PerfilProvider,
    RegistroProvider
  ]
})
export class AppModule {}
