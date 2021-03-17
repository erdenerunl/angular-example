import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getProducts(categoryId: number):Observable<Product[]>{
    let newPath = "http://localhost:3000/products";
    if(categoryId){
      newPath += "?categoryId=" + categoryId
    };

    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = "There is an error" + err.error.message;
    }else{
      errorMessage = "System Error!"
    }
    return throwError(errorMessage)
  }
}
