import { Component, OnInit } from '@angular/core';

import { BlogCategoryService } from './blog-category.service';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css'],
  providers: [BlogCategoryService]
})
export class BlogCategoryComponent implements OnInit {

  constructor(private blogCategoryService: BlogCategoryService) { }

  ngOnInit() {
  }

}
