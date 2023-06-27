import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  id: any;
  productdata: any;

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');
    });
    this.getproduct();
  }

  getproduct() {
    this.service.productdetails(this.id).subscribe((res: any) => {
      debugger;
      this.productdata = res;
    });
  }
}
