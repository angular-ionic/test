import {Http, Response} from "@angular/http";
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {elementDef} from '@angular/core/src/view/element';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


//feed
const apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';

//account
const apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
const apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
const apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
const apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';

//question
// const apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";
const apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
// const apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
const apiUrlGetQuestion = "https://imoocqa.gugujiankong.com/api/question/get";
// const apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
// const apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
// const apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";

//notification
// const apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";

@Injectable()
export class RestProvider {

  constructor(public http: Http) {

  }

  // 通用--通过Url获取返回数据
  private getUrlReturn(url: string): Observable<any> {
    return this.http.get(url)
      .map(response => this.extractData(response))
      .catch(error => this.handlerError(error))
  }

  // 通用--处理返回数据
  private extractData(response: Response): Observable<any> {
    let body = response.json();
    return JSON.parse(body) || {};
  }

  // 通用--处理异常
  handlerError(error: any) {
    let errorMessage: string;
    if (error instanceof Response) {
      errorMessage = JSON.parse(error['_body']).Message;
    }
    return Observable.throw(errorMessage);
  }
  // 处理错误信息
  // handleError(error: any | '') {
  //   let errorMessage: string;
  //   if (error instanceof Response) {
  //     let body = error.json() || '';
  //     const error = body.error || JSON.stringify(body);
  //     errorMessage = `${error.status} - ${error.statusText || ''} ${error}`
  //   } else {
  //     errorMessage = error.message ? error.message : error.toString();
  //   }
  //   console.error(errorMessage);
  //   return Observable.throw(errorMessage);
  // }

  // 请求--登陆
  request_login(mobile: string, password: string): Observable<any> {
    let url = `${apiUrlLogin}?mobile=${mobile}&password=${password}`;
    return this.getUrlReturn(url);
  }

  // 请求--注册
  request_register(mobile, nickname, password): Observable<any> {
    let url = `${apiUrlRegister}?mobile=${mobile}&nickname=${nickname}&password=${password}`;
    // console.log('注册' + mobile + nickname + password);
    return this.getUrlReturn(url);
  }

  // 请求--用户信息
  request_userInfo(userId): Observable<any> {
    let url = `${apiUrlUserInfo}?userid=${userId}`;
    return this.getUrlReturn(url);
  }

  // 请求--修改用户信息
  request_modifyUserInfo(userId, nickname): Observable<any> {
    let url = `${apiUrlUpdateNickName}?userid=${userId}&nickname=${nickname}`;
    return this.getUrlReturn(url);
  }

  // 请求--提问
  request_saveQuestion(userId, title, content): Observable<any> {
    let url = `${apiUrlQuestionSave}?userid=${userId}&title=${title}&content=${content}`;
    return this.getUrlReturn(url);
  }

  // 请求--问题列表
  request_getFeeds(): Observable<any> {
    console.log('rest 请求question');
    // console.log(this.getUrlReturn(apiUrlFeeds));
    return this.getUrlReturn(apiUrlFeeds);
  }

  // 请求--问题详情
  request_getQuestion(id): Observable<any> {
    let url = `${apiUrlGetQuestion}?id=${id}`;
    return this.getUrlReturn(url);
  }

}
