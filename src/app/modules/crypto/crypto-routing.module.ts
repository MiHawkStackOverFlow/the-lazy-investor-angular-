import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CryptoMainComponent } from './components/crypto-main/crypto-main.component';
import { CryptoComponent } from './components/crypto/crypto.component';

const routes: Routes = [
  {
    path: '', component: CryptoMainComponent,
    children: [
      { path: '', redirectTo: 'crypto', pathMatch: 'full' },
      { path: 'crypto', component: CryptoComponent },
      { path: 'crypto/:ranking', component: CryptoDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
