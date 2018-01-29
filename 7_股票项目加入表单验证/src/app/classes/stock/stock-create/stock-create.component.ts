import { Component, OnInit } from '@angular/core';
import { Stock } from '../../../service/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  stock: Stock;

  constructor() { }

  ngOnInit() {
  }

}
