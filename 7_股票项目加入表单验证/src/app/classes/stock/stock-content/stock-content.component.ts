import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService, Stock } from '../../../service/stock.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-stock-content',
  templateUrl: './stock-content.component.html',
  styleUrls: ['./stock-content.component.css']
})
export class StockContentComponent implements OnInit {

  // 数据源
  stocks: Stock[];

  // control
  searchControl: FormControl = new FormControl();

  // 搜索关键字
  searchKey: string;

  constructor(
    public router: Router,
    public stockService: StockService
  ) { }

  ngOnInit() {

    // 获取数据
    this.stocks = this.stockService.getStocks();

    // 监听搜索
    this.searchControl.valueChanges
        .debounceTime(500)
        .subscribe(value => {
          this.searchKey = value;
        });
  }

  // 新建股票
  onCreateStock() {
    // this.router.navigateByUrl('/home/create');
    this.router.navigateByUrl('/home/modify/' + 0);
  }

  // 修改股票
  onModifyStock(stock: Stock) {
    this.router.navigateByUrl('/home/modify/' + stock.id);
  }
}


