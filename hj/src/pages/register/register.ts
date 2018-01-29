import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {BasePage} from "../../common/base-page";
import {RestProvider} from "../../providers/rest/rest";

// @IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BasePage {
  errorMessage: any;

  // mobile: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public rest: RestProvider,
              public viewCtrl: ViewController) {
    super();
  }

  ionViewDidEnter() {
    console.log('注册: ionViewDidEnter');
  }
  ionViewDidLeave() {
    console.log('注册: ionViewDidLeave');
  }
  ionViewDidLoad() {
    console.log('注册: ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('注册: ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('注册: ionViewWillLeave');
  }
  ionViewWillUnload() {
    console.log('注册: ionViewWillUnload');
  }


  // 点击返回 && 注册成功返回
  onDismissAction() {
    this.viewCtrl.dismiss();
  }

  // 点击去登陆
  onToLogin() {
    this.navCtrl.pop();
  }

  // 点击注册
  onRegister(userInfoCtrl) {
    console.log(userInfoCtrl);
    let mobileCtrl = userInfoCtrl.mobileCtrl;
    let nicknameCtrl = userInfoCtrl.nicknameCtrl;
    let passwordInfoCtrl = userInfoCtrl.passwordInfoCtrl;
    let passwordCtrl = userInfoCtrl.passwordCtrl;
    let passwordConfirmCtrl = userInfoCtrl.passwordConfirmCtrl;
    console.log(passwordCtrl.errors);
    if (!mobileCtrl.value || !nicknameCtrl.value || !passwordCtrl.value || !passwordConfirmCtrl.value) {
      super.showToast(this.toastCtrl, '输入框不能为空');
    } else if (mobileCtrl.hasError('mobile')) {
      super.showToast(this.toastCtrl, '请输入正确的手机号');
    } else if (nicknameCtrl.hasError('name')) {
      super.showToast(this.toastCtrl, '昵称只能为中文或英文');
    } else if (passwordCtrl.hasError('minlength') || passwordCtrl.hasError('maxlength') || passwordConfirmCtrl.hasError('minlength') ||  passwordConfirmCtrl.hasError('maxlength')) {
      super.showToast(this.toastCtrl, '密码长度为6-8位');
    } else if (passwordInfoCtrl.hasError('passwordInfo')) {
      super.showToast(this.toastCtrl, '确认密码和密码不符');
    } else {
      let loading = super.showLoading(this.loadingCtrl, "正在注册...");
      this.rest.request_register(mobileCtrl.value, nicknameCtrl.value, passwordCtrl.value)
        .subscribe(
          response => {
            if (response['Status'] == "OK") {
              loading.dismissAll();
              super.showToast(this.toastCtrl, response['StatusContent']);
              setTimeout(() => this.onDismissAction(), 1500)  // 1.5秒后退出当前页面
            } else {
              loading.dismissAll();
              super.showToast(this.toastCtrl, response['StatusContent'])
            }
          },
          error => {
            console.log(error);
            loading.dismissAll();
            super.showToast(this.toastCtrl, "注册信息不通过!");
            return this.errorMessage = <any>error;
          },
          () => console.log('注册请求完毕')
        )
    }
    // 判断不为空的情况
    // if (userInfo.mobile && userInfo.nickname && userInfo.password && userInfo.passwordConfirm) {
    //   if (!/^1[34578]\d{9}$/.test(userInfo.mobile)) {
    //     super.showToast(this.toastCtrl, "请输入正确的手机号码");
    //   } else if (userInfo.password != userInfo.passwordConfirm) {
    //     super.showToast(this.toastCtrl, "密码和确认密码不符");
    //   } else {
    //     let loading = super.showLoading(this.loadingCtrl, "正在注册...");
    //     // 发送请求
    //     this.rest.request_register(userInfo.mobile, userInfo.nickname, userInfo.password)
    //       .subscribe(
    //         response => {
    //           console.log(response);
    //           if (response['Status'] == "OK") {
    //             loading.dismissAll();
    //             super.showToast(this.toastCtrl, response['StatusContent']);
    //             setTimeout(() => this.onDismissAction(), 1500)  // 1.5秒后退出当前页面
    //           } else {
    //             loading.dismissAll();
    //             super.showToast(this.toastCtrl, response['StatusContent'])
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //           loading.dismissAll();
    //           super.showToast(this.toastCtrl, "注册信息不通过!");
    //           return this.errorMessage = <any>error;
    //         },
    //         () => console.log('注册请求完毕')
    //       )
    //   }
    // } else {
    //   super.showToast(this.toastCtrl, "输入框不能为空");
    // }
  }


}
