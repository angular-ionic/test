import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {BasePage} from "../../common/base-page";
import {Storage} from "@ionic/storage";
import {RestProvider} from "../../providers/rest/rest";

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage extends BasePage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public storage: Storage,
              public rest: RestProvider,
              public viewCtrl: ViewController) {
    super();
  }

  /*****************************自定义方法**********************************/
  // 点击顶部的取消或返回
  onDismissAction() {
    this.viewCtrl.dismiss();
  }

  // 点击提问
  onQuestion(data) {
    let loading = super.showLoading(this.loadingCtrl, '问题发送中...')
    // 发送请求 先获取本地userId
    this.storage.get('UserId')
      .then(value => {
        if (value) {
          this.rest.request_saveQuestion(value, data.title, data.content)
            .subscribe(
              response => {
                console.log(response);
                loading.dismissAll();
                if (response.Status == 'OK') {
                  super.showToast(this.toastCtrl, response['StatusContent']);
                  // 回到homePage
                  this.viewCtrl.dismiss();
                } else {
                  super.showToast(this.toastCtrl, response['StatusContent']);
                }
              },
              error => {
                loading.dismissAll();
                console.log('请求错误');
              },
              () => {}
            )
        }
      })

  }

}
