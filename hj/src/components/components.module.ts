import {NgModule} from '@angular/core';
import {MoreComponent} from './more/more';
import {IonicModule} from 'ionic-angular/module';
import {LoginComponent} from './login/login';
import {RegisterComponent} from './register/register';
import {UserComponent} from './user/user';
import {HomeComponent} from './home/home';
import {QuestionComponent} from './question/question';
import {DirectivesModule} from "../directives/directives.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuestionDetailComponent } from './question-detail/question-detail';

@NgModule({
  declarations: [
    MoreComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    QuestionComponent,
    QuestionDetailComponent
  ],
  imports: [
    IonicModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MoreComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    QuestionComponent,
    QuestionDetailComponent
  ]
})
export class ComponentsModule {
}
