import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolucion-item',
  templateUrl: './devolucion-item.component.html',
  styleUrls: ['./devolucion-item.component.css']
})
export class DevolucionItemComponent implements OnInit {
	public devolucion_item:boolean;
  	constructor() { 
  		this.devolucion_item = true;
  	}

  	ngOnInit() {
  	}

}
