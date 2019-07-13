import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import {CategoryComponent} from '../category/category.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  title = "ÜRÜN LİSTESİ";
  product:Product[]=[];
  filterText = "";

  ngOnInit() {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProduct(params["categoryId"]).subscribe(data=>{
        this.product=data;
      })
    })

  }

  addToCard(product) {
    this.alertifyService.success(product.name);
  }

}
