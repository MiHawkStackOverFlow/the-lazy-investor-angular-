import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StocksMainComponent } from './components/stocks-main/stocks-main.component';
import { StocksComponent } from './components/stocks/stocks.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    StocksListComponent,
    StocksMainComponent,
    StocksComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    SharedModule
  ]
})
export class StocksModule { }
