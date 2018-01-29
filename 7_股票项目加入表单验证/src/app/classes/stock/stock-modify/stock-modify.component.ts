import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../../../service/stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-modify',
  templateUrl: './stock-modify.component.html',
  styleUrls: ['./stock-modify.component.css']
})
export class StockModifyComponent implements OnInit {

  stock: Stock;

  private originRating: number;

  formGroup: FormGroup;

  categories = [
    'IT',
    '金融',
    '互联网'
  ];

  constructor(
    public routeInfo: ActivatedRoute,
    public router: Router,
    public stockService: StockService
  ) { }

  ngOnInit() {
    const stockID = this.routeInfo.snapshot.params.id as number;
    this.stock = this.stockService.getStockByID(stockID);
    this.originRating = this.stock.rating;
    console.log(this.stock.name);

    // 创建formGroup
    this.createFormGroup();
  }

  // 创建formGroup
  createFormGroup() {
    let formBuilder = new FormBuilder();
    this.formGroup = formBuilder.group({
      stockName: [this.stock.name, Validators.required],
      stockPrice: [this.stock.price, Validators.required],
      stockDesc: [this.stock.desc],
      stockCategories: formBuilder.array([
        [this.categories.indexOf(this.stock.categories[0]) != -1],
        [this.categories.indexOf(this.stock.categories[1]) != -1],
        [this.categories.indexOf(this.stock.categories[2]) != -1],
      ], this.stockCategoriesValidator)
    })
  }

  // 取消
  cancel() {
    // 还原rating值
    this.stock.rating = this.originRating;
    // 返回列表
    this.router.navigateByUrl('/home/stock');
  }

  // 保存
  save() {
    if (window.confirm('确认要离开吗')) {

      // 赋值rating
      this.formGroup.value.stockRating = this.stock.rating;
      // 赋值category
      this.stock.categories = [];
      this.formGroup.value.stockCategories.forEach(category => {

      });

      this.stock.name = this.formGroup.value.stockName;
      this.stock.price = this.formGroup.value.stockPrice;
      this.stock.desc = this.formGroup.value.stockDesc;
      this.stock.categories = this.formGroup.value.stockCategories;

      // 返回列表页面
      this.router.navigateByUrl('/home/stock');
    }
  }

  // 股票名称校验
  stockNameError(): Boolean {
    console.log('股票名称校验');
    let stockNameControl = this.formGroup.get('stockName');
    return !stockNameControl.pristine && !stockNameControl.valid;
  }

  // 股票价格校验
  stockPriceError(): Boolean {
    console.log('股票价格校验');
    let stockPriceControl = this.formGroup.get('stockPrice');
    return !stockPriceControl.pristine && !stockPriceControl.valid;
  }

  // 股票类别校验
  stockCategoriesError(): Boolean {
    console.log('股票类别校验');
    let valid = false;
    let stockCategoriesControl = this.formGroup.get('stockCategories');
    stockCategoriesControl.value.forEach(category => {
      if (category) {
        valid = true;
      }
    });
    return !stockCategoriesControl.pristine && !valid;
  }

  // 股票类型validator
  stockCategoriesValidator(formArray: FormArray): any {
    let valid = false;
    formArray.value.forEach(category => {
      if (category) {
        valid = true;
      }
    });
    return valid ? true : {stockCategories: true};
  }
}
