import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.sass']
})
export class LugaresComponent{
	lugares: any = [
		{	
			image: 'https://images.unsplash.com/photo-1515601915049-08c8836c2204?ixlib=rb-0.3.5&s=0ef8a91e0986b7339cd80940ac397b6e&auto=format&fit=crop&w=2850&q=80',
			title: 'Omer Salom',
			lugar: 'Zion National Park, United States',
			detalle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
			link: 'https://unsplash.com/@osalom'
		},
		{	
			image: 'https://images.unsplash.com/photo-1513519107127-1bed33748e4c?ixlib=rb-0.3.5&s=20db953e108fabf520f08842eac7829e&auto=format&fit=crop&w=2853&q=80',
			title: 'Krisjanis Mezulis',
			lugar: 'Geirangerfjord, Norway',
			detalle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
			link: 'https://unsplash.com/@krisijanis'
		},
		{	
			image: 'https://images.unsplash.com/photo-1512895691935-ddd98c716644?ixlib=rb-0.3.5&s=ed0b97149537688cf618448f73baae46&auto=format&fit=crop&w=2850&q=80',
			title: 'Eberhard Grossgasteiger',
			lugar: 'Naturpark Fanes-Sennes-Prags, San Vigilio, Italy',
			detalle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
			link: 'https://unsplash.com/@eberhardgross'
		}
	]
}
