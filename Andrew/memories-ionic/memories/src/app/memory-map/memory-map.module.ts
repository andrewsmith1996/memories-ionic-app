import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { IonicModule } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { MemoryMapPage } from './memory-map.page';

const routes: Routes = [
  {
    path: '',
    component: MemoryMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[Geolocation],
  declarations: [MemoryMapPage]
})
export class MemoryMapPageModule {}
