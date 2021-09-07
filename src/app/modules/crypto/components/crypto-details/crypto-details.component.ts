import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CryptoCurrency } from '../../model/crypto';
import { allCryptos } from '../../model/all-cryptos';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit {
  selectedCrypto!: CryptoCurrency | undefined;
  allListedCrypto: CryptoCurrency[] = allCryptos;

  constructor( private route: ActivatedRoute,
               private location: Location) { }

  ngOnInit(): void {
    this.getCrypto();
  }

  getCrypto(): void {
    const ranking = Number(this.route.snapshot.paramMap.get('ranking'));
    this.selectedCrypto = this.allListedCrypto.find(crypto => crypto.ranking === ranking);
  }

}
