import {Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'more',
  templateUrl: 'more.html'
})
export class MoreComponent implements OnChanges {
  count = 0;
  @Input()
  isLogin: boolean;
  @Input()
  userInfo: any;
  @Output()
  presentLoginEmitter: EventEmitter<any> = new EventEmitter();
  @Output()
  pushUserPageEmitter: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('More异步获取到userInfo: ' + this.count++);
    console.log(this.userInfo );
  }

  // 点击 登录/注册 按钮
  presentLogin() {
    this.presentLoginEmitter.emit();
  }

  // 点击 查看个人主页
  pushUserPage() {
    this.pushUserPageEmitter.emit();
  }

}
