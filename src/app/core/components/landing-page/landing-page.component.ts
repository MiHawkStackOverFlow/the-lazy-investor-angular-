import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Card } from '../../../shared/model/card';
import { assets, liabilities } from '../../../shared/model/my-cards';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {
  // Data
  allAssets: Card[] = [];
  allLiabilities: Card[] = [];

  constructor() { }

  ngOnInit() {
    this.allAssets = assets;
    this.allLiabilities = liabilities;
  }

}
