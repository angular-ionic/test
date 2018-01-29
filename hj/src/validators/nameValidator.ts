// 昵称校验方法
import {FormControl} from "@angular/forms";

export function validator_nickname(control: FormControl) {
  let  value = (control.value || '') + '';
  let myrge = /^([\u4E00-\uFA29]*[a-z]*[A-Z]*)+$/;
  let isName = myrge.test(value);
  console.log('nameControl是; ' + control);
  return isName ? null : {'name': true}
}
