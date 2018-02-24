import { Component } from '@angular/core';
import { MountainsService } from '../../services/mountains.service';

@Component({
  selector: 'app-mountaincreating',
  templateUrl: './mountain-creating.component.html'
})
export class MountainCreatingComponent {

	mountain: any = {};


	constructor(private MountainsService: MountainsService) { 

	}

	saveMountains() {
		this.mountain.id = Date.now();
		this.MountainsService.saveMountainServer(this.mountain);
	}
}
