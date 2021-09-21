import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  // Observable string sources
  private stockSelectedSource = new Subject<Stock>();

  // Observable string streams
  stockSelected$ = this.stockSelectedSource.asObservable();

  addSelectedStock(stock: Stock) {
    this.stockSelectedSource.next(stock);
  }

}
