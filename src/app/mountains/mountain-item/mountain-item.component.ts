import { Component, OnInit } from '@angular/core';
import { MountainsService } from '../../services/mountains.service';

@Component({
  selector: 'app-mountain-item',
  templateUrl: './mountain-item.component.html',
  styleUrls: ['./mountain-item.component.sass']
})
export class MountainItemComponent implements OnInit {
	
	mountains = null;
	constructor(private MountainsService: MountainsService) {
		this.mountains = MountainsService.getMountains();
	}

	ngOnInit() {
	}

}
