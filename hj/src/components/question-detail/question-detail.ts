import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'question-detail',
  templateUrl: 'question-detail.html'
})
export class QuestionDetailComponent implements OnChanges{
  publicDate: Date = new Date();
  isFavourite: boolean = false;
  @Input()
  questionInfo: any;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('最终页面获取');
    console.log(this.questionInfo);
  }
}
