import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.module'

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass']
})
export class BlogDetailComponent implements OnInit {

	blogs: Blog[] =[];
  constructor() { }

  ngOnInit() {
  }

}
