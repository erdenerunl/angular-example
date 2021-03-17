import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../category/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3000/categories").pipe(
      tap(data => console.log(JSON.stringify(data)))
    )
  }
}
