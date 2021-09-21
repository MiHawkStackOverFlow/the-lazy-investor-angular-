import { Component, OnInit } from '@angular/core';
import { allStocks } from '../../model/all-stocks';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  allStocks: Stock[] = allStocks;
  selectedStocks: Stock[] = [];

  constructor() { }

  ngOnInit(): void {  }

}
