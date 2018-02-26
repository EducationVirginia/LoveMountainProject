import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass']
})
export class BlogItemComponent implements OnInit {

	blogs = null;

	constructor(private BlogService: BlogService) {
		BlogService.getBlogs()
			.valueChanges().subscribe((blog) => {
				this.blogs = blog;
			})
	}

	ngOnInit() {
	}

}
