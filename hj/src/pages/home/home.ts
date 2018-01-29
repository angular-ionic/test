import {Component} from '@angular/core';
import {LoadingController, ModalController, NavController} from 'ionic-angular';
import {QuestionPage} from "../question/question";
import {BasePage} from "../../common/base-page";
import {RestProvider} from "../../providers/rest/rest";
import {QuestionDetailPage} from "../question-detail/question-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {
  feeds: string[];
  questionInfo: any;

  /*****************************钩子函数******************************/
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public rest: RestProvider,
              public loadingCtrl: LoadingController
  ) {
    super();
  }
  ionViewDidEnter() {
    console.log('HomePage: ionViewDidEnter');
    this.getFeeds();
    console.log('获取 feeds');
    console.log(this.getFeeds());
  }

  ionViewDidLeave() {
    console.log('HomePage: ionViewDidLeave');
  }
  ionViewDidLoad() {
    console.log('HomePage: ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('HomePage: ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('HomePage: ionViewWillLeave');
  }
  ionViewWillUnload() {
    console.log('HomePage: ionViewWillUnload');
  }

  /*****************************自定义方法******************************/
  // 点击信息图标
  presentQuestionPage() {
    let modal = this.modalCtrl.create(QuestionPage);
    modal.present();
  }

  // 点击聊天图标
  onToChatTab() {
    super.selectTab(2, this.navCtrl);
  }

  // 获取getFeeds
  getFeeds() {
    let loading = super.showLoading(this.loadingCtrl, '加载中...');
    this.rest.request_getFeeds()
      .subscribe(
        response => {
          console.log('请求成功');
          console.log(response);
          loading.dismissAll();
          this.feeds = response;
        },
        error => {
          loading.dismissAll();
          console.log(error);
        },
        () => console.log('getFeeds请求完毕')
      );
  }

  // 点击问题card, 跳转到问题详情页
  pushQuestionDetailPage(questionId) {
    let loading = super.showLoading(this.loadingCtrl, '加载中...');
    this.rest.request_getQuestion(questionId)
      .subscribe(
        response => {
          loading.dismissAll();
          console.log(response);
          this.questionInfo = response;
          this.navCtrl.push(QuestionDetailPage, {questionInfo: this.questionInfo});
        },
        error => {
          loading.dismissAll();
          console.log(error);
        },
        () => console.log('问题详情请求完毕')
      )
  }

  // 下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      refresher.complete();
    }, 2000)
  }
}
