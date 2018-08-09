import { BlogCategoryModel } from './../model/blog-category.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogCategoryService {

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<BlogCategoryModel[]> {
    return this.httpClient.get<BlogCategoryModel[]>("http://localhost:8001/categories");
  }

}
