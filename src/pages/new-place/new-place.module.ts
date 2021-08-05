import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPlacePage } from './new-place';

@NgModule({
  declarations: [
    NewPlacePage,
  ],
  imports: [
    IonicPageModule.forChild(NewPlacePage),
  ],
})
export class NewPlacePageModule {}
