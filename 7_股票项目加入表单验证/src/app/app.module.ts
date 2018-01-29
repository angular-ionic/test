import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Root
import { AppComponent } from './app.component';

// Main
import { ContentComponent } from './classes/content/content.component';
import { HeaderComponent } from './classes/header/header.component';
import { FooterComponent } from './classes/footer/footer.component';
import { MenuComponent } from './classes/menu/menu.component';
import { SidebarComponent } from './classes/sidebar/sidebar.component';
import { RatingStarComponent } from './classes/stock/rating-star/rating-star.component';

// 首页
import { HomeComponent } from './classes/home/home.component';

// 股票列表
import { StockContentComponent } from './classes/stock/stock-content/stock-content.component';

// 新建股票
import { StockCreateComponent } from './classes/stock/stock-create/stock-create.component';
// 编辑股票
import { StockModifyComponent } from './classes/stock/stock-modify/stock-modify.component';

// 登录
import { LoginComponent } from './classes/login-register/login/login.component';
// 注册
import { RegisterComponent } from './classes/login-register/register/register.component';

// 路由
import { AppRoutingModule } from './modules/app-routing.module';

import { Code404Component } from './classes/error/code404/code404.component';
import { DashboardComponent } from './classes/dashboard/dashboard.component';
import { StockService } from './service/stock.service';

// 管道
import { MultiplyPipe } from './pipe/multiply.pipe';
import { StockSearchPipe } from './pipe/stock-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    RatingStarComponent,
    StockContentComponent,
    StockCreateComponent,
    StockModifyComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    Code404Component,

    StockSearchPipe,
    MultiplyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
