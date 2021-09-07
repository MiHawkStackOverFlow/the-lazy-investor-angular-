import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';

import localeIn from '@angular/common/locales/en-IN';
registerLocaleData(localeIn);

import { SharedModule } from '../../shared/shared.module';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoMainComponent } from './components/crypto-main/crypto-main.component';
import { CryptoCardsComponent } from './components/crypto-cards/crypto-cards.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { CryptoComponent } from './components/crypto/crypto.component';

@NgModule({
  declarations: [
    CryptoMainComponent,
    CryptoCardsComponent,
    CryptoListComponent,
    CryptoDetailsComponent,
    CryptoComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    SharedModule
  ]
})
export class CryptoModule { }
