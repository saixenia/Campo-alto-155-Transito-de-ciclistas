import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleBeneficiosPage } from './detalle-beneficios';

@NgModule({
  declarations: [
    DetalleBeneficiosPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleBeneficiosPage),
  ],
})
export class DetalleBeneficiosPageModule {}
