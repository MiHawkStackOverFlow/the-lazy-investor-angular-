import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoMainComponent } from './components/crypto-main/crypto-main.component';
import { CryptoCardsComponent } from './components/crypto-cards/crypto-cards.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';

@NgModule({
  declarations: [
    CryptoMainComponent,
    CryptoCardsComponent,
    CryptoListComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    SharedModule
  ]
})
export class CryptoModule { }
