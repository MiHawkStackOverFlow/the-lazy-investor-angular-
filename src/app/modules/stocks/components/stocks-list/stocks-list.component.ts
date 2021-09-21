import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {
  @Input('allListedStocks') allListedStocks!: Stock[];

  constructor(private stockService: StockService) { }

  selectStock(stock: Stock) {
    this.stockService.addSelectedStock(stock);
  }

  ngOnInit(): void {  }

}
