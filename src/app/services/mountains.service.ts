import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()
export class MountainsService {

	mountains: any = [
		{
			id: 1,
			title: 'The Matterhorn',
			description: 'The first successful ascent of the Matterhorn was completed by Edward Whymper, Lord Francis Douglas, Charles Hudson, Douglas Hadow, Michel Croz, and two Zermatt guides, Peter Taugwalder, father and son. An accident on the descent saw four of the party perish.',
			elevation: '4,478m',
			ascent: '1865',
			by: 'Mattias Milos',
			twitter: '@mattiasmilos',
			imagePath: 'https://images.unsplash.com/photo-1508437226781-7cdb8043d2a8?ixlib=rb-0.3.5&s=a60292231cddf13a5ac886fea4fe4c75&auto=format&fit=crop&w=2850&q=80',
			country: ' Switzerland',
			city: 'Zermatt',
			topBgImgHeader: '-175%'
		},
		{
			id: 2,
			title: 'Alpamayo, Peru',
			description: "Named the world's most beautiful mountain by the German magazine Alpinismus in 1966, based on a survey of climbers and photographers.",
			elevation: '5,86m',
			ascent: '1957',
			by: 'Jeremiah Berman',
			twitter: '@calibre9001',
			imagePath: 'https://images.unsplash.com/photo-1497106636505-e4fd6e16d74c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=49ec3232d65c27e39a64c837b7be9832&auto=format&fit=crop&w=2756&q=80',
			country: ' Peru',
			city: 'Alpamayo',
			topBgImgHeader: '-147%'
		},
		{
			id: 3,
			title: 'Mount Damavand',
			description: 'The second-highest volcano in Asia, Damavand is significant in Persian mythology. It forms part of the Volcanic Seven Summits mountaineering challenge (along with Kilimanjaro, Pico de Orizaba, Mount Sidley, Mount Giluwe, Elbrus and Ojos del Salado).',
			elevation: '5,610m',
			ascent: '907',
			by: 'Martin Jernberg',
			twitter: '@martinjphoto',
			imagePath: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07a040d0b8e3866b9087e5b2103e88ee&auto=format&fit=crop&w=2850&q=80',
			country: ' Iran',
			city: 'Mount Damavand',
			topBgImgHeader: '-201%'
		},
		{
			id: 4,
			title: 'Stetind, Norway',
			description: 'This distinctive peak was named Norway, National Mountain" in a radio poll in 2002',
			elevation: '1,392m',
			ascent: '1910',
			by: 'Ferdinand Stöhr',
			twitter: '@fellowferdi',
			imagePath: 'https://images.unsplash.com/photo-1508592931388-95bc7b61033d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=481808169e4b7432d631e8018a424874&auto=format&fit=crop&w=1950&q=80',
			country: ' Norway',
			city: 'Stetind',
			topBgImgHeader: '-225%'
		},
		{
			id: 5,
			title: 'Cerro Torre, Argentina/Chile',
			description: 'The jagged peak is found in the Southern Patagonian Ice Field.',
			elevation: '3,128m',
			ascent: '1974',
			by: 'Jens Johnsson',
			twitter: '@jens_johnsson',
			imagePath: 'https://images.unsplash.com/photo-1508235181320-6703c60c27ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc6e2d0750ca5e6d1dc7917cfabf4bc7&auto=format&fit=crop&w=1950&q=80',
			country: 'Argentina/Chile',
			city: 'Cerro Torre',
			topBgImgHeader: '-175%'
		}
	];
  	constructor(private afDB: AngularFireDatabase, private http: Http) {

  	}
	public getMountains() {
		return this.afDB.list('mountains/');
	}
	public detailMount(id){
		return this.mountains.find((mountain) => {
			return mountain.id == id 
		});
	}
	public saveMountainServer(mountain){
		this.afDB.database.ref('mountains/' + mountain.id).set(mountain);
	}

	public editMountainServer(mountain){
		this.afDB.database.ref('mountains/' + mountain.id).set(mountain);
	}
  	
  	public obtGeoData(address){
  		return this.http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + address);
  	}

  	public getMountain(id) {
		return this.afDB.object('mountains/' + id);
	}

}
