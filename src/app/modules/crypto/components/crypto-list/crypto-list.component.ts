import { Component, OnInit } from '@angular/core';
import { allCryptos } from '../../model/all-cryptos';
import { CryptoCurrency } from '../../model/crypto';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.scss']
})
export class CryptoListComponent implements OnInit {
  allListedCrypto: CryptoCurrency[] = allCryptos;

  constructor() { }

  ngOnInit(): void { }

}
