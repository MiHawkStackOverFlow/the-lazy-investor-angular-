import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myHeaderTitle = 'Loading Header ...';
  myFooterTitle = 'Love Financial Tips ?';
  backGroundImagePath = '/assets/images/blue_sky.jpg';

  ngOnInit() {
    setTimeout(() => { this.myHeaderTitle = 'The Lazy Investor' }, 5000);
  }

  openGitHubTab(open: boolean) {
    if (open) {
      window.open("https://github.com/MiHawkStackOverFlow/the-lazy-investor-angular-", "_blank");
    }
  }
}
