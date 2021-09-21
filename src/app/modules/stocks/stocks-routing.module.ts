import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksMainComponent } from './components/stocks-main/stocks-main.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  {
    path: '', component: StocksMainComponent,
    children: [
      { path: '', redirectTo: 'stocks', pathMatch: 'full' },
      { path: 'stocks', component: StocksComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
