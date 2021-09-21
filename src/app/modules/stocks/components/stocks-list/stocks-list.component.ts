import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  @Input('allListedStocks') allListedStocks!: Stock[];

  constructor() { }

  ngOnInit(): void {
  }

}
