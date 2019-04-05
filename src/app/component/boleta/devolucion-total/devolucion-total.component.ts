import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolucion-total',
  templateUrl: './devolucion-total.component.html',
  styleUrls: ['./devolucion-total.component.css']
})
export class DevolucionTotalComponent implements OnInit {
	public devolucion_total:boolean;
  	constructor() { 
  		this.devolucion_total = true;
  	}

  	ngOnInit() {
  	}

}
