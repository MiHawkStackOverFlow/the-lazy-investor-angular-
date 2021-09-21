import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { allStocks } from '../../model/all-stocks';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  allStocks: Stock[] = allStocks;
  selectedStocks: Stock[] = [];
  subscription: Subscription;

  constructor(private stockService: StockService) {
    this.subscription = this.stockService.stockSelected$.subscribe((stock) => {
      const foundInAllStocks = this.allStocks.some(item => item.id === stock.id);
      if (foundInAllStocks) {
        this.allStocks = this.allStocks.filter((myStock) => stock.id !== myStock.id);
        this.selectedStocks.push(stock);
      } else {
        this.selectedStocks = this.selectedStocks.filter((myStock) => stock.id !== myStock.id);
        this.allStocks.push(stock);
      }
      // remove dups for now
      this.selectedStocks = this.selectedStocks.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
      this.allStocks = this.allStocks.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);
      // sort
      this.selectedStocks.sort((a, b) => { return a.id - b.id });
      this.allStocks.sort((a, b) => { return a.id - b.id });
    });
  }

  ngOnInit(): void {
    this.allStocks.sort((a, b) => { return a.id - b.id });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
