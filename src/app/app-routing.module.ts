import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'productlist',
    pathMatch:'full'
  },
  {
    path:"productlist",
    component: ProductlistComponent
  },
  {
    path:"productdetails",
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
