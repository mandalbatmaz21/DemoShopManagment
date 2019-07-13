import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable,throwError } from 'rxjs';
import { tap,catchError} from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  path='http://localhost:3000/categories';


  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.path).pipe(
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
