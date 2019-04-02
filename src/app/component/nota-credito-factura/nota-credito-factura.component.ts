import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-credito-factura',
  templateUrl: './nota-credito-factura.component.html',
  styleUrls: ['./nota-credito-factura.component.css']
})
export class NotaCreditoFacturaComponent implements OnInit {

  public anulacion_operacion:boolean;
  public anulacion_error_ruc:boolean;	
  public descuento_global:boolean;
  public devolucion_total:boolean;
  public correcion_error_descripcion:boolean;
  public devolucion_item:boolean;
  public descuento_item:boolean;
  constructor() { 
  this.anulacion_operacion = false;
  this.anulacion_error_ruc = false;	
  this.descuento_global = false;
  this.devolucion_total = false;
  this.correcion_error_descripcion = false;
  this.devolucion_item = false;
  this.descuento_item = false;
  }

  ngOnInit() {
  }
  anulacionOperacion(){
	  this.anulacion_operacion = true;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  buscarAnulacionOperactionRuc(){
	  this.anulacion_operacion = true;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  anulacionErrorRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = true;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }	
  buscarAnulacionErrorRucRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = true;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  descuentoGlobal(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = true;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  buscarDescuentoGlobalRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = true;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  devolucionTotal(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = true;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  buscarDevolucionTotalRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = true;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  correcionErrorDescripcion(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = true;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  buscarCorrecionErrorDescripcionRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = true;
	  this.devolucion_item = false;
	  this.descuento_item = false;
  }
  devolucionItem(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = true;
	  this.descuento_item = false;
  }
  buscarDevolucionItemRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = true;
	  this.descuento_item = false;
  }
  descuentoItem(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = true;
  }
  buscarDescuentoItemRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.descuento_global = false;
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
	  this.descuento_item = true;
  }

}
