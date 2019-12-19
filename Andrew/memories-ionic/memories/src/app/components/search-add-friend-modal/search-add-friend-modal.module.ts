import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchAddFriendModalPage } from './search-add-friend-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAddFriendModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchAddFriendModalPage]
})
export class SearchAddFriendModalPageModule {}
