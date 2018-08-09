import { Component, OnInit } from '@angular/core';

import { BlogCategoryModel } from './../model/blog-category.model';
import { BlogCategoryService } from './blog-category.service';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css'],
  providers: [BlogCategoryService]
})
export class BlogCategoryComponent implements OnInit {
  private categories: Array<BlogCategoryModel>;

  constructor(private blogCategoryService: BlogCategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.blogCategoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }

}
