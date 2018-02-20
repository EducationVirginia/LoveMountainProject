import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.sass']
})
export class MountainDetailComponent implements OnInit {

	lat: number = 46.4102012;
	lng: number = 11.5850429;
  constructor() { }

  ngOnInit() {
  }

}
