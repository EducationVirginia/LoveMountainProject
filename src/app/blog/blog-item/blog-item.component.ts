import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.module'

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass']
})
export class BlogItemComponent implements OnInit {

	blogs: Blog[] = [
		new Blog ('Blog title post with a featured image', 'John Joe', '18 de Febrero 2018', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia soluta excepturi, voluptatem, dicta vero necessitatibus. Ratione magnam atque ex nemo laborum natus, dolor cupiditate! Sequi, magnam, architecto. Laborum, omnis, dignissimos!', 'Ratione magnam atque ex nemo laborum natus, dolor cupiditate! Sequi, magnam, architecto. Laborum, omnis, dignissimos', 'https://images.unsplash.com/photo-1485342264836-e3abdc17d99e?ixlib=rb-0.3.5&s=9c800bf8bd48ecec691bb3627e362124&auto=format&fit=crop&w=1189&q=80', 'Frances', 'París' ),
		new Blog ('Blog title post with a slider', 'Amy Joe', '20 de Febrero 2018', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia soluta excepturi, voluptatem, dicta vero necessitatibus. Ratione magnam atque ex nemo laborum natus, dolor cupiditate! Sequi, magnam, architecto. Laborum, omnis, dignissimos!', 'Ratione magnam atque ex nemo laborum natus, dolor cupiditate! Sequi, magnam, architecto. Laborum, omnis, dignissimos', 'https://images.unsplash.com/photo-1485342264836-e3abdc17d99e?ixlib=rb-0.3.5&s=9c800bf8bd48ecec691bb3627e362124&auto=format&fit=crop&w=1189&q=80', 'Frances', 'París' )
	];

	constructor() { }

	ngOnInit() {
	}

}
