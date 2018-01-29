import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { BasePage } from "../../common/base-page";
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BasePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public restProvider: RestProvider,
              public toastCtrl: ToastController,
              public storage: Storage
              ) {
    super();
  }

  ionViewDidEnter() {
    console.log('登录: ionViewDidEnter');
  }
  ionViewDidLeave() {
    console.log('登录: ionViewDidLeave');
  }
  ionViewDidLoad() {
    console.log('登录: ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('登录: ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('登录: ionViewWillLeave');
  }
  ionViewWillUnload() {
    console.log('登录: ionViewWillUnload');
  }

  // 点击取消
  onDismissAction() {
    this.viewCtrl.dismiss();
  }

  // 点击注册
  pushRegisterAction() {
    this.navCtrl.push(RegisterPage);
  }

  // 点击登录
  onLoginAction(data) {
    console.log(data);
    let loading = super.showLoading(this.loadingCtrl, "正在登录...");
    // 发送请求
    this.restProvider.request_login(data.mobile, data.password)
      .subscribe(
        response => {
          loading.dismissAll();
          console.log(response);
          if (response.Status == 'FAIL') {
            // 登录信息错误, 弹出toast
            super.showToast(this.toastCtrl, response.StatusContent);
          } else {
            // 登录信息正确, 弹出提示框
            super.showToast(this.toastCtrl, '登录成功');
            // 存储登录信息
            this.storage.set('UserId', response.UserId)
              .then(() => {
                this.viewCtrl.dismiss(response.UserId);
              })
              .catch(error => {
                console.log(error);
                super.showToast(this.toastCtrl, '嗷唷,崩溃咧...');
              });
            // modal消失,整个login是modal出来的, 同时发送一个UserId给MorePage,使其显示isLogin为true

            // setTimeout(() => {
            //   this.viewCtrl.dismiss();
            /* }, 1500);*/
          }

        },
        error => {
          loading.dismissAll();
          console.log('请求失败');
          console.log(error);
        },
        () => {
          console.log('登录请求完成');
        }
      )

  }


}
