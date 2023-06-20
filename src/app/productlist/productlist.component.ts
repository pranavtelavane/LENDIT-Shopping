import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  list: any;
  category: any;

  constructor(private service : ServiceService){ }

  ngOnInit(): void {
    this.getcategories();
    this.getallproducts();
  }

  getallproducts(){
    this.service.GetAll().subscribe((res:any)=>{
      debugger
      this.list = res.products;
    })
  }

  getcategories(){
    this.service.productcategories().subscribe((res:any)=>{
      debugger;
      this.category = res;
    })
  }

}
