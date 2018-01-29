import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-question-detail',
  templateUrl: 'question-detail.html',
})
export class QuestionDetailPage {
  questionInfo: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController
  ) {
    this.questionInfo = navParams.data.questionInfo;
    console.log('detailpage页面');
    console.log(navParams.data.questionInfo);
  }
}
