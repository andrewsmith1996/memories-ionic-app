import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchMemoriesModalPage } from './search-memories-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMemoriesModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchMemoriesModalPage]
})
export class SearchMemoriesModalPageModule {}
