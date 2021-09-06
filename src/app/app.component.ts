import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myHeaderTitle = 'The Lazy Investor';
  myFooterTitle = 'Love Financial Tips ?';
  backGroundImagePath = '/assets/images/blue_sky.jpg';

  openGitHubTab(open: boolean) {
    if (open) {
      window.open("https://github.com/MiHawkStackOverFlow/the-lazy-investor-angular-", "_blank");
    }
  }
}
