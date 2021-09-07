import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-main',
  templateUrl: './crypto-main.component.html',
  styleUrls: ['./crypto-main.component.scss']
})
export class CryptoMainComponent implements OnInit {
  viewType: string = 'Cards';
  legalCryptoCountries: string[] = ['El Salvador', 'India', 'USA', 'Russia', 'Australia'];

  constructor() { }

  ngOnInit(): void { }
}
