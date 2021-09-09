import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LandingPageComponent } from './core/components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  {
    path: 'asset-crypto',
    loadChildren: () => import('./modules/crypto/crypto.module').then(m => m.CryptoModule)
  },
  {
    path: 'asset-fd',
    loadChildren: () => import('./modules/fixed-deposits/fixed-deposits.module').then(m => m.FixedDepositsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
