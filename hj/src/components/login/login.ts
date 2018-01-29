import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginComponent {
  mobile: number;
  password: any;

  @Output()
  pushRegisterEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  loginEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    // console.log('Hello LoginComponent Component');
  }

  // 点击注册
  pushRegisterAction() {
    this.pushRegisterEmitter.emit();
  }

  // 点击登录
  onLoginAction() {
    this.loginEmitter.emit({mobile: this.mobile, password: this.password});
  }
}
