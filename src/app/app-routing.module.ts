import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'product-add-1',component:ProductAddForms1Component,canActivate:[LoginGuard]},
  {path:'product-add-2',component:ProductAddForms2Component,canActivate:[LoginGuard]},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'product/category/:categoryId',component:ProductComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
