import { Component, OnInit } from '@angular/core';
import { MountainsService } from '../../services/mountains.service';

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.sass']
})
export class MountainListComponent implements OnInit{

	mountains = null;
	
	constructor(private MountainsService: MountainsService) {
		MountainsService.getMountains()
			.valueChanges().subscribe((mountains) => {
				this.mountains = mountains;
			});
	}

	ngOnInit() {
	}

}
