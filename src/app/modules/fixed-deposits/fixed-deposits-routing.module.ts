import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FdCalculatorComponent } from './components/fd-calculator/fd-calculator.component';
import { FixedDepositsMainComponent } from './components/fixed-deposits-main/fixed-deposits-main.component';

const routes: Routes = [
  {
    path: '', component: FixedDepositsMainComponent,
    children: [
      { path: '', redirectTo: 'fd-calculator', pathMatch: 'full' },
      { path: 'fd-calculator', component: FdCalculatorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedDepositsRoutingModule { }
