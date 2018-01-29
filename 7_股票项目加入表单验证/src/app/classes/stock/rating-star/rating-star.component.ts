import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit, OnChanges {

  @Input()
  rating: number = 0;

  @Input()
  readOnly: Boolean = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  stars: Boolean[] = [];

  constructor() { }

  ngOnInit() { }

  // 钩子: 输入属性发生改变时执行
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i < 6; i++) {
      this.stars.push(i > this.rating);
    }
  }

  // 点击星星
  onStarClick(rating: number) {
    if (this.readOnly || rating < 0) {
      return;
    }
    this.rating = rating + 1;
    this.ratingChange.emit(this.rating);
  }

}
