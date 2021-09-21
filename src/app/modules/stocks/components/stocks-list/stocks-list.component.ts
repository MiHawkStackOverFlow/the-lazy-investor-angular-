import { Component, OnInit } from '@angular/core';
import { allStocks } from '../../model/all-stocks';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  allListedStocks: Stock[] = allStocks;
  constructor() { }

  ngOnInit(): void {
  }

}
