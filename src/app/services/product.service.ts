import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable,throwError } from 'rxjs';
import { tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  path='http://localhost:3000/products';
  product: Product[] = [];

  addProduct(product:Product):Observable<Product>{
    const httpOptions={
        headers : new HttpHeaders({
            'Content-Type':'application-json',
            'Authorization':'Token'
        })
    }

    console.log("addProduct()--productname="+product.name+"İD="+product.imageUrl+"description"+product.description);
    let params:HttpParams;
    return this.http.post<Product>(this.path,product).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );
}

  getProduct(categoryId):Observable<Product[]>{
      let newPath=this.path;
      if(categoryId){
          newPath+="?categoryId="+categoryId;
      }
      console.log("categId:"+categoryId);
    return this.http.get<Product[]>(newPath).pipe(
        tap(data=>console.log(JSON.stringify(data))),
        catchError(this.handleError)
    );
  }


 handleError(err:HttpErrorResponse){
        let errorMessage="";
        if(err.error instanceof ErrorEvent){
            errorMessage="UNEXPECTED ERROR!";
        }   
        else{
            errorMessage="THIS ERROR WAS OCCURRED BY THE SYSTEM";
        }
        return throwError(errorMessage);
    }

}
