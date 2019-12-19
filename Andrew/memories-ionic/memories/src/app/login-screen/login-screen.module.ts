import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';

import { IonicModule } from '@ionic/angular';

import { LoginScreenPage } from './login-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginScreenPage],
  providers: [ Toast ]
})
export class LoginScreenPageModule {}
