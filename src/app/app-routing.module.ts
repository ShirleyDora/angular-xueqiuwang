import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseComponent } from './view/choose/choose.component';
import { IndexComponent } from './view/index/index.component';
import { NewstockComponent } from './view/newstock/newstock.component';

const routes: Routes = [
  {
    path:"",
    component:IndexComponent,
  },
  {
    path:"screener",
    component:ChooseComponent,
  },
  {
    path:"newstock",
    component:NewstockComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
