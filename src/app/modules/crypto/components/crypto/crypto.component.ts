import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  viewType: string = 'Cards';

  constructor() { }

  ngOnInit(): void { }

  changeView(view: string) {
    if (this.viewType === view) { return; }
    else { this.viewType = view; }
  }
}
