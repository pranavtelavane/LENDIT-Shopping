import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  apiurl = 'https://dummyjson.com/products'

  GetAll(){
    return this.http.get(this.apiurl);
  }
  productcategories(){
    return this.http.get(this.apiurl+'/categories')
  }
  productdetails(i:any){
    return this.http.get(this.apiurl+'/'+i)
  }
}
