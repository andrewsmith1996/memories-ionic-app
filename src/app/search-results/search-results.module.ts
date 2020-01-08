import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { IonicModule } from '@ionic/angular';

import { SearchResultsPage } from './search-results.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsPage
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
  declarations: [SearchResultsPage]
})
export class SearchResultsPageModule {}
