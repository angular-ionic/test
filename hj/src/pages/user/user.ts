import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {RestProvider} from "../../providers/rest/rest";
import {BasePage} from "../../common/base-page";
import set = Reflect.set;

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BasePage {
  userInfo: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public rest: RestProvider,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
    super();
    this.userInfo = navParams.data;
    // console.log(this.userInfo);
  }

  // 点击修改按钮
  onModifyUserInfo(nickname) {
    let loading = super.showLoading(this.loadingCtrl);
    this.rest.request_modifyUserInfo(this.userInfo.UserId, nickname)
      .subscribe((response) => {
          loading.dismissAll();
          if (response.Status == 'OK') {
            super.showToast(this.toastCtrl, response.StatusContent);
          } else {
            super.showToast(this.toastCtrl, response.StatusContent);
          }
          setTimeout(() => this.navCtrl.pop(), 1500);
        },
        error => {
          loading.dismissAll();
          console.log(error);
          super.showToast(this.toastCtrl, '请求错误');
        },
        () => console.log('修改请求完成'));
  }

  // 点击移除
  onLogout() {
    let alert = this.alertCtrl.create({
      title: '退出登录',
      message: '确认要退出当前账号?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            let loading = super.showLoading(this.loadingCtrl, '注销中...');
            console.log('yes');
            this.storage.remove('UserId')
              .then(() => {
                loading.dismissAll();
                super.showToast(this.toastCtrl, '用户已注销');
                console.log('注销: ');
                setTimeout(() => this.navCtrl.pop(), 1500);
              });
          }
        }
      ]
    });
    alert.present();
  }

}
