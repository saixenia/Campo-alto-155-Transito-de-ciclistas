import { Component } from '@angular/core';
import { RutaPage } from '../ruta/ruta';
import { PerfilPage } from '../perfil/perfil';
import { TipsPage } from '../tips/tips';
import { BeneficiosPage } from '../beneficios/beneficios';
import { MapaPage } from '../mapa/mapa';
import { AlertasPage } from '../alertas/alertas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  rutaPage =  RutaPage;
  perfilPage = PerfilPage;
  tipsPage =   TipsPage;
  beneficiosPage =  BeneficiosPage;
  mapaPage =  MapaPage;
  alertaPage= AlertasPage;

  constructor(){
    
  }

}
