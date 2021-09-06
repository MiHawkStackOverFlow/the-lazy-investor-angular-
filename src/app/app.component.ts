import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Card } from './shared/model/card';
import { assets, liabilities } from './shared/model/my-cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Properties
  myHeaderTitle = 'Loading Header ...';
  myFooterTitle = 'Love Financial Tips ?';
  backGroundImagePath = '/assets/images/blue_sky.jpg';

  // Data
  allAssets: Card[] = [];
  allLiabilities: Card[] = [];

  // Observables
  timer!: Subscription;

  ngOnInit() {
    this.allAssets = assets;
    this.allLiabilities = liabilities;
    this.timer = timer(3000, 1000).subscribe(() => { this.myHeaderTitle = 'The Lazy Investor' });
  }

  openGitHubTab(open: boolean) {
    if (open) {
      window.open("https://github.com/MiHawkStackOverFlow/the-lazy-investor-angular-", "_blank");
    }
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
