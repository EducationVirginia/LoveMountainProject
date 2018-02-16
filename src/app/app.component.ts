import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
	inputValue = '';
	creatStatus = 'No app was create'

	onCreateInfo() {
		this.creatStatus = 'App was create ' +  this.inputValue;
 	}
}
