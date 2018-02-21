import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MountainsService } from '../../services/mountains.service';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.sass']
})
export class MountainDetailComponent implements OnInit {

	lat: number = 46.4102012;
	lng: number = 11.5850429;
	id = null;
	mountain: any = {};

	constructor(private route: ActivatedRoute, private  MountainsService: MountainsService ) { 
		this.id = this.route.snapshot.params['id'];
		this.mountain = this.MountainsService.detailMount(this.id);
	}

	ngOnInit() {
	}

}
