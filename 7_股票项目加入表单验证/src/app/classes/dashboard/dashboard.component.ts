import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';


import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today: Date = new Date();

  price = 0.2;

  origionNumber = 2;

  searchInput: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {

    // 监听
    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 === 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e),
        error => console.log(error),
        () => console.log('结束了')
      );

    // 响应式
    this.searchInput.valueChanges
        .debounceTime(500)
        .subscribe(value => {
          console.log(value);
        });
  }

}
