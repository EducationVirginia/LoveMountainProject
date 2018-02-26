import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass']
})
export class BlogDetailComponent implements OnInit {

	id = null;
	blog: any = {};

	constructor(private route: ActivatedRoute, private  BlogService: BlogService ) { 
		this.id = this.route.snapshot.params['id'];
		this.blog = this.BlogService.detailBlog(this.id);
	}

	ngOnInit() {
	}

}
