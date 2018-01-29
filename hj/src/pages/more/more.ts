import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ModalController} from 'ionic-angular/components/modal/modal-controller';
import {LoginPage} from '../login/login';
import {Storage} from '@ionic/storage';
import {BasePage} from "../../common/base-page";
import {RestProvider} from "../../providers/rest/rest";
import {UserPage} from "../user/user";

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BasePage {
  /*************************自定义属性*****************************/
  isLogin: boolean = false;
  userInfo: any;
  headFace: string;

  /****************************钩子函数****************************/
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public loadingCtrl: LoadingController,
              public rest: RestProvider) {
    super();
    console.log('More--ng: Constructor');
  }

  // 点击登录, 在页面完成load之后  ionViewDidLoad
  ionViewWillEnter() {
    console.log('more: ionViewDidLoad');
  }
  ionViewDidLeave() {
    console.log('more: ionViewDidLeave');
  }
  ionViewDidEnter() {
    console.log('more: ionViewDidEnter');
    this.loadUserInfo();
  }
  ionViewWillLeave() {
    console.log('more: ionViewWillLeave');
  }
  ionViewWillUnload() {
    console.log('more: ionViewWillUnload');
  }

  /***************************自定义方法************************/
  // 点击登录时MoreComponent传来的事件
  presentLogin() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.onDidDismiss(data => {
      if (data) {
        this.isLogin = true;
        this.loadUserInfo(); // 登录页面之后返回MorePage的时候, 需要重新刷新数据
      }
    });
    modal.present();
  }

  // 点击查看个人主页
  pushUserPage() {
    console.log('点击个人主页');
    this.navCtrl.push(UserPage, this.userInfo);
  }

  // 加载页面信息
  loadUserInfo() {
    // 获取是否登录
    this.storage.get('UserId')
      .then((value) => {
        // console.log('get value: ' + value);
        if (value) {
          // 如果用户登录, 获取用户信息
          let loading = super.showLoading(this.loadingCtrl, '加载中...');
          this.rest.request_userInfo(value)
            .subscribe(
              response => {
                // console.log(response);
                loading.dismissAll();
                this.userInfo = response;
                // console.log(this.userInfo);
                console.log('More请求用户信息成功...');
                this.headFace = response['UserHeadFace'] + '?' + (new Date()).valueOf();
              },
              error => console.log(error),
              () => console.log('More用户信息请求完毕')
            );
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      })
      .catch(error => {
        console.log('错误' + error);
        this.isLogin = false;
      })
  }
}
