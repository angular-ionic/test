import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {
  @Output()
  onQuestionEmitter: EventEmitter<any> = new EventEmitter<any>();
  title: string;
  content: string;

  constructor() {

  }

  onQuestion() {
    let params = {title: this.title, content: this.content};
    this.onQuestionEmitter.emit(params);
  }

}
