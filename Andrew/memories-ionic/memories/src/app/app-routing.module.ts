import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-screen', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-memory', loadChildren: './add-memory/add-memory.module#AddMemoryPageModule' },
  { path: 'memory-diary-detail/:id', loadChildren: './memory-diary-detail/memory-diary-detail.module#MemoryDiaryDetailPageModule' },
  { path: 'add-memory', loadChildren: './add-memory/add-memory.module#AddMemoryPageModule' },
  { path: 'memory-map', loadChildren: './memory-map/memory-map.module#MemoryMapPageModule' },
  { path: 'nearby-location-modal', loadChildren: './components/nearby-location-modal/nearby-location-modal.module#NearbyLocationModalPageModule' },
  { path: 'share-memory-modal', loadChildren: './components/share-memory-modal/share-memory-modal.module#ShareMemoryModalPageModule' },
  { path: 'search-memories-modal', loadChildren: './components/search-memories-modal/search-memories-modal.module#SearchMemoriesModalPageModule' },
  { path: 'search-results', loadChildren: './search-results/search-results.module#SearchResultsPageModule' },
  { path: 'login-screen', loadChildren: './login-screen/login-screen.module#LoginScreenPageModule' },
  { path: 'qr-code-memory-modal', loadChildren: './components/qr-code-memory-modal/qr-code-memory-modal.module#QrCodeMemoryModalPageModule' },
  { path: 'search-add-friend-modal', loadChildren: './components/search-add-friend-modal/search-add-friend-modal.module#SearchAddFriendModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
