import { Component, OnInit } from '@angular/core';
import { MountainsList } from '../mountais.module'

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.sass']
})
export class MountainListComponent implements OnInit{

	mountainsList: MountainsList[] = [
		new MountainsList('Classic Europe', 'Letter wooded direct two men indeed income sister. Impression up admiration partiality is.', 'https://images.unsplash.com/photo-1485342264836-e3abdc17d99e?ixlib=rb-0.3.5&s=9c800bf8bd48ecec691bb3627e362124&auto=format&fit=crop&w=1189&q=80', 'Italy', 'Carezza')
	];

	constructor() { }

	ngOnInit() {
	}

}
