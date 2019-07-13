import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,
    private productService:ProductService,private alertifyService:AlertifyService) 
    { }

  productAddForm:FormGroup;
  model:Product = new Product();
  categories:Category[]=[];
  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]        
    })
  }

  add(){
    if(this.productAddForm.valid){
      this.model=Object.assign({},this.productAddForm.value);

      this.alertifyService.warning("Ürün Adı="+this.model.name);
      this.productService.addProduct(this.model).subscribe(data=>{
        this.alertifyService.success(data.name+data.description+"--"+"basariyla eklendi");
      });  
    }
  }

  ngOnInit() {
    this.createProductAddForm();
    this.categoryService.getCategory().subscribe(data=>{
      this.categories=data;
    });
  }

}
