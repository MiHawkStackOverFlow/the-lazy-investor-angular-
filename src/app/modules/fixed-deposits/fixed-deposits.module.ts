import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixedDepositsRoutingModule } from './fixed-deposits-routing.module';
import { FixedDepositsMainComponent } from './components/fixed-deposits-main/fixed-deposits-main.component';
import { FdCalculatorComponent } from './components/fd-calculator/fd-calculator.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FixedDepositsMainComponent,
    FdCalculatorComponent
  ],
  imports: [
    CommonModule,
    FixedDepositsRoutingModule,
    SharedModule
  ]
})
export class FixedDepositsModule { }
