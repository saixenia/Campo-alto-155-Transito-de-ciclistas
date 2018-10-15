import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleTipsPage } from './detalle-tips';

@NgModule({
  declarations: [
    DetalleTipsPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleTipsPage),
  ],
})
export class DetalleTipsPageModule {}
