import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.sass']
})
export class MountainsComponent implements OnInit {


  showGrid: boolean = false;
  showList: boolean = true;

	constructor() { }

	ngOnInit() {
	}

  btnGrid() {
    this.showGrid = true;
    this.showList = false;

  }
  btnList() {
    this.showGrid = false;
    this.showList = true;
  }

}
