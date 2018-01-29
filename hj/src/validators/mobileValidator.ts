// 电话校验方法
import {FormControl} from "@angular/forms";

export function validator_mobile(control: FormControl): any {
  let mobileValue = (control.value || '') + '';
  let rege =  /^1[34578][0-9]\d{8}$/;
  let isMobile = rege.test(mobileValue);
  return isMobile ? null : {'mobile': true};
}
