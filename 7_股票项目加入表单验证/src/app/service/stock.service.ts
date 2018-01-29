import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  private stocks: Stock[] = [
    new Stock(1, '第一只股票', 2.3, 4, '第一只股票的描述信息', ['IT', '金融', '互联网']),
    new Stock(2, '第二只股票', 3.3, 5, '第二只股票的描述信息', ['IT']),
    new Stock(3, '第三只股票', 1.6, 2, '第三只股票的描述信息', ['互联网']),
    new Stock(4, '第四只股票', 2.8, 3.5, '第四只股票的描述信息', ['IT', '互联网']),
    new Stock(5, '第五只股票', 6.4, 4.8, '第五只股票的描述信息', ['IT', '互联网']),
    new Stock(6, '第六只股票', 9.1, 2.1, '第六只股票的描述信息', ['IT', '互联网']),
    new Stock(7, '第七只股票', 6.2, 4.2, '第七只股票的描述信息', ['IT', '互联网']),
    new Stock(8, '第八只股票', 8.2, 3.7, '第八只股票的描述信息', ['IT', '互联网'])
  ];

  constructor() { }

  // 获取股票数据
  getStocks(): Stock[] {
    return this.stocks;
  }

  // 根据id获取stock
  getStockByID(stockID: number): Stock {
    if (stockID > 0) {
      return this.stocks.find((stock) => stock.id == stockID);
    } else {
      return new Stock(0, '', 0, 0, '', []);
    }
  }
}

// 股票
export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
