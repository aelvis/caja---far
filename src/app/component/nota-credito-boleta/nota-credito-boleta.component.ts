import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nota-credito-boleta',
  templateUrl: './nota-credito-boleta.component.html',
  styleUrls: ['./nota-credito-boleta.component.css']
})
export class NotaCreditoBoletaComponent implements OnInit {
  public anulacion_operacion:boolean;
  public anulacion_error_ruc:boolean;	
  public devolucion_total:boolean;
  public correcion_error_descripcion:boolean;
  public devolucion_item:boolean;
  constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  this.anulacion_operacion = false;
  this.anulacion_error_ruc = false;	
  this.devolucion_total = false;
  this.correcion_error_descripcion = false;
  this.devolucion_item = false;
  }
  showSuccess(titulo,mensaje) {
    this.toastr.success(mensaje, titulo);
  }
  showError(titulo,mensaje) {
    this.toastr.error(mensaje, titulo);
  }
  showWarning(titulo,mensaje) {
    this.toastr.warning(mensaje, titulo);
  }
  ngOnInit() {
  }
  anulacionOperacion(){
	  this.anulacion_operacion = true;
	  this.anulacion_error_ruc = false;	
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
  }

  anulacionErrorRuc(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = true;	
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
  }	

  devolucionTotal(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.devolucion_total = true;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = false;
  }
  correcionErrorDescripcion(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = true;
	  this.devolucion_item = false;
  }
  devolucionItem(){
	  this.anulacion_operacion = false;
	  this.anulacion_error_ruc = false;	
	  this.devolucion_total = false;
	  this.correcion_error_descripcion = false;
	  this.devolucion_item = true;
  }
}
