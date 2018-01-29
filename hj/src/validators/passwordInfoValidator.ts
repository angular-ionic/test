import {FormControl, FormGroup} from "@angular/forms";

export function validator_passwordInfo(group: FormGroup): any {
  let passwordCtrl: FormControl = group.get('password') as FormControl;
  let passwordConfirmCtrl: FormControl = group.get('passwordConfirm') as FormControl;
  let isPasswordInfo: boolean = passwordCtrl.value === passwordConfirmCtrl.value;
  return isPasswordInfo ? null : {'passwordInfo': true};
}
