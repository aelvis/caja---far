import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-devolucion-total-factura',
  templateUrl: './devolucion-total-factura.component.html',
  styleUrls: ['./devolucion-total-factura.component.css']
})
export class DevolucionTotalFacturaComponent implements OnInit {
	public devolucion_total:boolean;
	public buscar_anulacion_operacion:boolean;
	public devolucion_total_dos:boolean;
	public imprimir_anulacion_error_ruc:boolean;
	public ultima_boleta:boolean;
	public reiniciar_ticket;
	public ticket_anulacion_error_ruc;
	public pedido_anulacion_error_ruc;	
	public descripcion_operacion_anulacion;
  	constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  		this.devolucion_total = true;
  		this.devolucion_total_dos = false;
  		this.imprimir_anulacion_error_ruc = false;
  	}
	ngOnInit() {
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
	showInfo(titulo,mensaje) {
	    this.toastr.info(mensaje, titulo);
	}
  	buscarAnulacionOperactionRuc(){
	  this.devolucion_total = true;
	  this._usu.buscarAnulacionOperacionFacturaService(this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo == 'info'){
						this.showInfo("Alerta","La factura ya fue usada");
	  				}else{
		  				if(res["mensaje"].ticket){
		  					$("#anulacionErrorRuc").modal("show");
		  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
		  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
		  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
		  				}else{
		  					this.showError("Alerta","No se Encuentra La Factura");
		  				}
	  				}
	  			}
	  		},
	  		error => {
				this.showError("Alerta","Error de Internet");
	  		}
	  	);
  	}
  	anularItemOperacion(codex){
		this._usu.anularItemOperacionFacturaService(codex).subscribe(
		  	res => {
		  		if(res["mensaje"].terminar){
						localStorage.clear();
						this._router.navigate(['/login']);
		  		}else{
		  			if(res["mensaje"].codigo == 'success'){
		  				this.showSuccess("Alerta","Actualizado");
							this._usu.buscarAnulacionOperacionFacturaService(this.buscar_anulacion_operacion).subscribe(
						  		res => {
						  			if(res["mensaje"].terminar){
										localStorage.clear();
										this._router.navigate(['/login']);
						  			}else{
						  				if(res["mensaje"].codigo == 'info'){
						  					this.showInfo("Alerta","La factura ya fue usada");
						  				}else{
							  				if(res["mensaje"].ticket){
							  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
							  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
							  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
							  				}else{
							  					this.showError("Alerta","No se Encuentra La Factura");
							  				}
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
		this._usu.anularItemOperacionTicketFacturaService(this.ticket_anulacion_error_ruc.id_ticket_cliente).subscribe(
		  	res => {
		  		if(res["mensaje"].terminar){
						localStorage.clear();
						this._router.navigate(['/login']);
		  		}else{
		  			if(res["mensaje"].codigo == 'success'){
							this._usu.buscarAnulacionOperacionFacturaService(this.buscar_anulacion_operacion).subscribe(
						  		res => {
						  			if(res["mensaje"].terminar){
										localStorage.clear();
										this._router.navigate(['/login']);
						  			}else{
						  				if(res["mensaje"].codigo == 'info'){
						  					this.showInfo("Alerta","La factura ya fue usada");
						  				}else{
							  				if(res["mensaje"].reiniciar_ticket){
							  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
							  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
							  				}else{
							  					this.showError("Alerta","Faltan Actualizar Los Pedidos");
							  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
							  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
							  				}
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
		this._usu.validarOperacionTicketFacturaService(verificar_dos_nuevo).subscribe(
		  	res => {
		  		if(res["mensaje"].terminar){
						localStorage.clear();
						this._router.navigate(['/login']);
		  		}else{
		  			if(res["mensaje"].codigo == 'success'){
		  				this.devolucion_total_dos = false;	
		  				this.imprimir_anulacion_error_ruc = true;
		  				this.ultima_boleta = res["mensaje"].ultima_boleta;
		  			}else{
		  				if(res["mensaje"].codigo == 'info'){
		  					this.devolucion_total_dos = true;
		  					this.imprimir_anulacion_error_ruc = false;
		  					this.ultima_boleta = res["mensaje"].ultima_boleta;
		  				}else{
	  						if(res["mensaje"].codigo == 'warning'){
								this.showWarning("Alerta","La Factura no existe");
								this.devolucion_total_dos = false;
								this.imprimir_anulacion_error_ruc = false;
		  					}else{
		  						this.showError("Alerta","Aún no valida la Factura");
		  						this.devolucion_total_dos = false;
		  						this.imprimir_anulacion_error_ruc = false;
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
  	guardarAnulacionOperacioneBdController(){	
	  this._usu.guardarAnulacionOperacioneBdServiceDevolucionTotakFactura(this.ultima_boleta,this.descripcion_operacion_anulacion,this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo = 'success'){
	  					this.showSuccess("Alerta","Se guardo correctamente");
	  					this.devolucion_total = true;
	  					this.devolucion_total_dos = false;
	  					this.imprimir_anulacion_error_ruc = true;
	  				}else{
	  					this.showError("Alerta","Volver a Intentarlo - Error del internet");
	  				}
	  			}
	  		},
	  		error => {
				this.showError("Alerta","Error de Internet");
	  		}
	  	);
  	}
}
