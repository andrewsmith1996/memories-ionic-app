import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Modal Pages
import { SearchMemoriesModalPage } from './components/search-memories-modal/search-memories-modal.page';
import { MemoriesListComponent } from './components/memories-list/memories-list.component';
import { NearbyLocationModalPage } from './components/nearby-location-modal/nearby-location-modal.page';
import { AddFriendModalPage } from './components/add-friend-modal/add-friend-modal.page'
import { ShareMemoryModalPage } from './components/share-memory-modal/share-memory-modal.page';
import { QrCodeMemoryModalPage } from './components/qr-code-memory-modal/qr-code-memory-modal.page';
import { SearchAddFriendModalPage } from './components/search-add-friend-modal/search-add-friend-modal.page';

// QR Code Generator
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
    imports: [NgxQRCodeModule, IonicModule.forRoot(), RouterModule, CommonModule, FormsModule],
    declarations: [ NavMenuComponent, SearchMemoriesModalPage, MemoriesListComponent, NearbyLocationModalPage, AddFriendModalPage, ShareMemoryModalPage, QrCodeMemoryModalPage, SearchAddFriendModalPage],
    exports: [ NavMenuComponent, SearchMemoriesModalPage, MemoriesListComponent, NearbyLocationModalPage, AddFriendModalPage, ShareMemoryModalPage, QrCodeMemoryModalPage, SearchAddFriendModalPage]
  })
export class SharedModule {}
