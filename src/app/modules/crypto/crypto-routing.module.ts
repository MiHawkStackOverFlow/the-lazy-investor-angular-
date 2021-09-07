import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoMainComponent } from './components/crypto-main/crypto-main.component';

const routes: Routes = [
  { path: '', component: CryptoMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
