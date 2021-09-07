import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../shared/model/card';
import { Assets } from '../../../shared/model/assets';
import { assets, liabilities } from '../../../shared/model/assets-and-liabilities';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  // Data
  allAssets: Card[] = [];
  allLiabilities: Card[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.allAssets = assets;
    this.allLiabilities = liabilities;
  }

  navigateToAssetPage(cardName: string) {
    switch ( cardName ) {
      case Assets.Crypto:
        this.router.navigateByUrl('/crypto');
        break;
      default:
        break;
    }
  }

}
