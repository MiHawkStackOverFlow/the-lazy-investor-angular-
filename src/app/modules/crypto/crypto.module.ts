import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoMainComponent } from './components/crypto-main/crypto-main.component';

@NgModule({
  declarations: [
    CryptoMainComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    SharedModule
  ]
})
export class CryptoModule { }
