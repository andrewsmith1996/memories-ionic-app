import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { IonicModule } from '@ionic/angular';

import { MemoryDiaryDetailPage } from './memory-diary-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MemoryDiaryDetailPage
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
  declarations: [MemoryDiaryDetailPage]
})
export class MemoryDiaryDetailPageModule {}
