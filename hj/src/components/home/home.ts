import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {RestProvider} from "../../providers/rest/rest";

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnChanges{
  @Input()
  feeds: string[];
  @Output()
  presentQuestionPageEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  pushQuestionDetailPageEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('首页');
    console.log(this.feeds);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('首页1');
    console.log(this.feeds);
  }

  ionViewDidEnter() {
    console.log('HomeComponent: ionViewDidLeave');
  }
  ionViewDidLeave() {
    console.log('HomeComponent: ionViewDidLeave');
  }
  ionViewDidLoad() {
    console.log('HomeComponent: ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('HomeComponent: ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('HomeComponent: ionViewWillLeave');
  }
  ionViewWillUnload() {
    console.log('HomeComponent: ionViewWillUnload');
  }


  // 点击提问
  presentQuestionPage() {
    this.presentQuestionPageEmitter.emit();
  }

  // 点击问题, 弹出问题详情页
  pushQuestionDetailPage(id: any) {
    console.log('component 点击问题');
    console.log(id);
    this.pushQuestionDetailPageEmitter.emit(id);
  }
}
