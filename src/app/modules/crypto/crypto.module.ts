import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CryptoRoutingModule } from './crypto-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    SharedModule
  ]
})
export class CryptoModule { }
