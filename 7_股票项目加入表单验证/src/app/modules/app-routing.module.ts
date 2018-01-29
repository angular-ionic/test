import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../classes/home/home.component';
import { LoginComponent } from '../classes/login-register/login/login.component';
import { Code404Component } from '../classes/error/code404/code404.component';
import { StockContentComponent } from '../classes/stock/stock-content/stock-content.component';
import { DashboardComponent } from '../classes/dashboard/dashboard.component';
import { StockCreateComponent } from '../classes/stock/stock-create/stock-create.component';
import { StockModifyComponent } from '../classes/stock/stock-modify/stock-modify.component';

const routes: Routes = [
    {

        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: '', redirectTo: 'stock', pathMatch: 'full'},
            {path: 'dashbaord', component: DashboardComponent},
            {path: 'stock', component: StockContentComponent},
            {path: 'create', component: StockCreateComponent},
            {path: 'modify/:id', component: StockModifyComponent},
            {path: 'dashboard', component: DashboardComponent}
        ]
    },
    {
        path: '**',
        component: Code404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
