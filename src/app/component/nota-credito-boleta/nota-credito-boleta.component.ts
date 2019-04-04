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
  public anulacion_operacion_dos:boolean;
  public anulacion_error_ruc:boolean;	
  public descuento_global:boolean;
  public devolucion_total:boolean;
  public correcion_error_descripcion:boolean;
  public devolucion_item:boolean;
  public descuento_item:boolean;
  public ticket_anulacion_operacion;
  public pedido_anulacion_operacion;
  public buscar_anulacion_operacion;
  public reiniciar_ticket;
  public imprimir_anulacion_operacion_dos:boolean;
  constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  this.anulacion_operacion = false;
  this.anulacion_operacion_dos = false;
  this.imprimir_anulacion_operacion_dos = false;
  this.anulacion_error_ruc = false;	
  this.descuento_global = false;
  this.devolucion_total = false;
  this.correcion_error_descripcion = false;
  this.devolucion_item = false;
  this.descuento_item = false;
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
	  this.anulacion_operacion_dos = false;
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
	  this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].ticket){
	  					$("#anulacionOperaciones").modal("show");
	  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
	  					this.ticket_anulacion_operacion = res["mensaje"].ticket;
	  					this.pedido_anulacion_operacion = res["mensaje"].pedido;
	  				}else{
	  					this.showError("Alerta","No se Encuentra La Boleta");
	  				}
	  			}
	  		},
	  		error => {
				this.showError("Alerta","Error de Internet");
	  		}
	  	);
  }
  anularItemOperacion(codex){
	this._usu.anularItemOperacionService(codex).subscribe(
	  	res => {
	  		if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  		}else{
	  			if(res["mensaje"].codigo == 'success'){
						this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
					  		res => {
					  			if(res["mensaje"].terminar){
									localStorage.clear();
									this._router.navigate(['/login']);
					  			}else{
					  				if(res["mensaje"].reiniciar_ticket){
					  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
					  					this.pedido_anulacion_operacion = res["mensaje"].pedido;
					  				}else{
					  					this.showError("Alerta","No se Encuentra La Boleta");
					  				}
					  			}
					  		},
					  		error => {
								this.showError("Alerta","Error de Internet");
					  		}
					  	);
	  			}else{
	  				this.showError("Alerta","Error - Volver a Intentarlo");
	  			}
	  		}
	  	},
	  	error => {
			this.showError("Alerta","Error de Internet");
	  	}
	);
  }
  desactualizarTicket(){
	this._usu.anularItemOperacionTicketService(this.ticket_anulacion_operacion.id_ticket_cliente).subscribe(
	  	res => {
	  		if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  		}else{
	  			if(res["mensaje"].codigo == 'success'){
						this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
					  		res => {
					  			if(res["mensaje"].terminar){
									localStorage.clear();
									this._router.navigate(['/login']);
					  			}else{
					  				if(res["mensaje"].reiniciar_ticket){
					  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
					  					this.pedido_anulacion_operacion = res["mensaje"].pedido;
					  					this.ticket_anulacion_operacion = res["mensaje"].ticket;
					  				}else{
					  					this.showError("Alerta","No se Encuentra La Boleta");
					  				}
					  			}
					  		},
					  		error => {
								this.showError("Alerta","Error de Internet");
					  		}
					  	);
	  			}else{
	  				this.showError("Alerta","Error - Volver a Intentarlo");
	  			}
	  		}
	  	},
	  	error => {
			this.showError("Alerta","Error de Internet");
	  	}
	);
  }
  verificarAnulacionOperacionDos(verificar_dos_nuevo){
	this._usu.validarOperacionTicketService(verificar_dos_nuevo).subscribe(
	  	res => {
	  		if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  		}else{
	  			if(res["mensaje"].codigo == 'success'){
	  				this.anulacion_operacion_dos = true;	
	  				this.imprimir_anulacion_operacion_dos = true;
	  			}else{
	  				if(res["mensaje"].codigo == 'info'){
	  					this.anulacion_operacion_dos = true;
	  					this.imprimir_anulacion_operacion_dos = false;
	  				}else{
  						if(res["mensaje"].codigo == 'warning'){
							this.showWarning("Alerta","La Boleta no existe");
	  					}else{
	  						this.showError("Alerta","Aún no valida la Boleta");
	  					}
	  				}
	  			}
	  		}
	  	},
	  	error => {
			this.showError("Alerta","Error de Internet");
	  	}
	);
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
