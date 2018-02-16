import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	logo = 'LoveMountain';
	nombre:string ='';
	textSearch = 'Aqui click buscar'
	inputBuscar = false

	btnBscar(){
		this.textSearch = 'Escribir'
		this.inputBuscar = true
	}
  
}
