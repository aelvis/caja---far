import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correcion-descripcion',
  templateUrl: './correcion-descripcion.component.html',
  styleUrls: ['./correcion-descripcion.component.css']
})
export class CorrecionDescripcionComponent implements OnInit {
	public correcion_error_descripcion:boolean;
  	constructor() {
   		this.correcion_error_descripcion = true;
   	}

  ngOnInit() {
  }

}
