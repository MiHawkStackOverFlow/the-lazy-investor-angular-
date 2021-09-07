import { Component, OnInit } from '@angular/core';
import { allCryptos } from '../../model/all-cryptos';
import { CryptoCurrency } from '../../model/crypto';

@Component({
  selector: 'app-crypto-cards',
  templateUrl: './crypto-cards.component.html',
  styleUrls: ['./crypto-cards.component.scss']
})
export class CryptoCardsComponent implements OnInit {
  allListedCrypto: CryptoCurrency[] = allCryptos;

  constructor() { }

  ngOnInit(): void { }

}
