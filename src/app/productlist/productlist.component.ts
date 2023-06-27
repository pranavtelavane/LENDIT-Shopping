import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  list: any;
  category: any;
  templist: any;
  seaval: any;

  constructor(private service : ServiceService,private router:Router){ }

  ngOnInit(): void {
    this.getcategories();
    this.getallproducts();
  }

  getallproducts(){
    this.service.GetAll().subscribe((res:any)=>{
      debugger
      this.list = res.products;
      this.templist = this.list;
    })
  }

  getcategories(){
    this.service.productcategories().subscribe((res:any)=>{
      debugger;
      this.category = res;
    })
  }

  details(i:any){
    debugger
    let id = i.id;
    this.router.navigateByUrl("productdetails/"+id);
    
  }

  categoryval(val){
    debugger
    var catlist = this.list.filter(x=>x.category == val);
    this.templist = [];
    this.templist = catlist;
  }

  searchv(e){
   this.seaval = e.target.value
  }

  searchproduct(){
    debugger
    var searchp = this.list.filter(x=>x.title == this.seaval);
    this.templist = [];
    this.templist = searchp;
  }

}
