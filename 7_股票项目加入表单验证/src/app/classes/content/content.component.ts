import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';

  pageDescription = '';

  constructor(public router: Router) {
    console.log('constructor');
    // tslint:disable-next-line:no-unused-expression
    router.events
          .filter(event => event instanceof NavigationEnd)
          .subscribe((event: NavigationEnd) => {
            if (event.url.indexOf('dashboard') !== -1) {
              this.pageTitle = 'Dashbaord';
              this.pageDescription = '';
            } else if (event.url.indexOf('stock') !== -1) {
              this.pageTitle = '股票';
              this.pageDescription = '';
            }
          });
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
