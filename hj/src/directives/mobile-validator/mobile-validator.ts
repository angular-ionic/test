import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {validator_mobile} from "../../validators/mobileValidator";

@Directive({
  selector: '[mobileValidator]' ,
  providers: [{provide: NG_VALIDATORS, useValue: validator_mobile, multi: true}]
})
export class MobileValidatorDirective {

  constructor() {
    console.log('Hello MobileValidatorDirective Directive');
  }

}
