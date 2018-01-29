import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: 'user.html'
})
export class UserComponent implements OnChanges{
  @Input()
  userInfo: any;
  nickname: string = '';
  headFace: string = '';
  @Output()
  onModifyUserInfoEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onLogoutEmitter: EventEmitter<any> = new EventEmitter<any>();

  /***************************钩子函数**********************************/
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userInfo);
    this.nickname = this.userInfo.UserNickName;
    this.headFace = this.userInfo.UserHeadface;
  }

  /**************************自定义函数**********************************/
  // 点击保存
  onModifyUserInfo() {
    this.onModifyUserInfoEmitter.emit(this.nickname);
  }

  // 点击注销
  onLogout() {
    this.onLogoutEmitter.emit();
  }


}
