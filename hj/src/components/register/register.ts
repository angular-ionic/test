import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {validator_mobile} from "../../validators/mobileValidator";
import {validator_nickname} from "../../validators/nameValidator";
import {validator_passwordInfo} from "../../validators/passwordInfoValidator";

@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  mobile: number;
  nickname: string;
  password: string;
  passwordConfirm: string;

  @Output()
  onRegisterEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  onToLoginEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello RegisterComponent Component');
  }

  ngOnInit(): void {
    let fb = new FormBuilder();
    this.formGroup = fb.group({
      mobile: ['', [Validators.required, validator_mobile]],
      nickname: ['', [Validators.required, validator_nickname]],
      passwordInfo: fb.group({
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      }, {validator: validator_passwordInfo})
    })
  }

  // 点击注册
  onRegister() {
    let params = {
      mobileCtrl: this.formGroup.get('mobile'),
      nicknameCtrl: this.formGroup.get('nickname'),
      passwordInfoCtrl: this.formGroup.get('passwordInfo'),
      passwordCtrl: this.formGroup.get('passwordInfo').get('password'),
      passwordConfirmCtrl: this.formGroup.get('passwordInfo').get('passwordConfirm')
    };
    this.onRegisterEmitter.emit(params);
    // this.formGroup.valid ? this.onRegisterEmitter.emit(params) : null;
  }

  // 点击去登陆
  onToLogin() {
    this.onToLoginEmitter.emit();
  }

}

