import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { Card } from './shared/model/card';
import { assets, liabilities } from './shared/model/assets-and-liabilities';
import { SpinnerService } from './shared/services/spinner.service';

import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Properties
  myHeaderTitle = 'Loading Header ...';
  myFooterTitle = 'Love Financial Tips ?';

  // Observables
  timer!: Subscription;

  constructor(public spinner: SpinnerService, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    this.timer = timer(2000, 1000).subscribe(() => { this.myHeaderTitle = 'The Lazy Investor' });
  }

  openGitHubTab(open: boolean) {
    if (open) {
      window.open("https://github.com/MiHawkStackOverFlow/the-lazy-investor-angular-", "_blank");
    }
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinner.start();
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.spinner.stop();
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        this.spinner.stop();
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        this.spinner.stop();
      }, 2000);
    }
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
