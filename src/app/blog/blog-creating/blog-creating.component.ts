import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogcreating',
  templateUrl: './blog-creating.component.html'
})
export class BlogCreatingComponent {

	blog: any = {};
	id: any = null;

	constructor(private BlogService: BlogService, private route: ActivatedRoute) { 
		this.id = this.route.snapshot.params['id'];
		console.log(this.id);
		if(this.id != 'new'){
			this.BlogService.getBlog(this.id)
				.valueChanges().subscribe((blog) => {
				this.blog = blog;
			});
		}
	}

	saveBlogs() {
		this.blog.id = Date.now();
		this.BlogService.saveBlogServer(this.blog);
		alert('Si sube');
		this.blog = {};
	}
	deleteBlogs(){
		this.blog = {};
	}
}
