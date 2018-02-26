import { Component } from '@angular/core';
import { MountainsService } from '../../services/mountains.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mountaincreating',
  templateUrl: './mountain-creating.component.html'
})
export class MountainCreatingComponent {

	mountain: any = {};
	id: any = null;

	constructor(private MountainsService: MountainsService, private route: ActivatedRoute) { 
		this.id = this.route.snapshot.params['id'];
		console.log(this.id);
		if(this.id != 'new'){
			this.MountainsService.getMountain(this.id)
				.valueChanges().subscribe((mountain) => {
				this.mountain = mountain;
			});
		}
	}

	saveMountains() {
	
		const address = this.mountain.country + ',' + this.mountain.city 
		
		this.MountainsService.obtGeoData(address)
			.subscribe((result) => {

				console.log(result);	
				this.mountain.lat = result.json().results[0].geometry.location.lat;
				this.mountain.lng = result.json().results[0].geometry.location.lng;


				this.mountain.id = Date.now();

				if(this.id != 'new') {
					this.MountainsService.editMountainServer(this.mountain);
					alert('Editar con valido');
				} else {
					this.mountain.id = Date.now();
					this.MountainsService.saveMountainServer(this.mountain);
					alert('Guardado con valido');
				}
				
				this.mountain = {};
				
			});
	}
	deleteMountains(){
		this.mountain = {};
	}
}
