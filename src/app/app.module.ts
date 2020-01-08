import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';

// Ionic Native Plugins
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';

// Modal Pages
import { SearchMemoriesModalPage} from './components/search-memories-modal/search-memories-modal.page';
import { NearbyLocationModalPage} from './components/nearby-location-modal/nearby-location-modal.page';
import { AddFriendModalPage } from './components/add-friend-modal/add-friend-modal.page';
import { ShareMemoryModalPage } from './components/share-memory-modal/share-memory-modal.page';
import { QrCodeMemoryModalPage } from './components/qr-code-memory-modal/qr-code-memory-modal.page';
import { SearchAddFriendModalPage } from './components/search-add-friend-modal/search-add-friend-modal.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [SearchMemoriesModalPage, NearbyLocationModalPage, AddFriendModalPage, ShareMemoryModalPage, QrCodeMemoryModalPage, SearchAddFriendModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Geolocation,
    LocalNotifications,
    Contacts,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
