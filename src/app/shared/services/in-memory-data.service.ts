import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { assets, liabilities } from '../model/assets-and-liabilities';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { assets, liabilities };
  }

  genId(myArray: any[]): number {
    return myArray.length > 0 ? Math.max(...myArray.map(t => t.id)) + 1 : 11;
  }

}
