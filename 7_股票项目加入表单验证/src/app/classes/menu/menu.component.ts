import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[];

  selectedMenuID: number;

  constructor(public router: Router) { }

  ngOnInit() {

    this.menus = [
      new Menu(1, '首页', 'home/dashboard'),
      new Menu(2, '股票管理', '/home/stock')
    ];
  }

  navigate(menu: Menu) {
    this.selectedMenuID = menu.id;
    this.router.navigateByUrl(menu.linkUrl);
    // console.log(menu.linkUrl);
  }
}

class Menu {
  constructor(
    public id: number,
    public title: string,
    public linkUrl: string
  ) {}
}
