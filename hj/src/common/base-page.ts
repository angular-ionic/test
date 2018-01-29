import {Loading, LoadingController, NavController, Tabs, ToastController} from "ionic-angular";
import {selector} from "rxjs/operator/publish";

export abstract class BasePage {

  constructor() {

  }

  // 显示loading
  protected showLoading(loadingCtrl: LoadingController, message: string = ''): Loading {
    let loading = loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loading.present();
    return loading;
  }

  // 显示toast
  protected showToast(toastCtrl: ToastController, message: string) {
    let toast = toastCtrl.create({
      message: message,
      position: 'middle',
      dismissOnPageChange: true,
      duration: 1500
    });
    toast.present();
  }

  // tab间的跳转
  protected selectTab(index: number, navCtrl: NavController) {
    let tabs: Tabs = navCtrl.parent;
    tabs.select(index);
  }

  // xianshi refresh

}


