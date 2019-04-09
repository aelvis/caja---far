import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anulacion-error-ruc-factura',
  templateUrl: './anulacion-error-ruc-factura.component.html',
  styleUrls: ['./anulacion-error-ruc-factura.component.css']
})
export class AnulacionErrorRucFacturaComponent implements OnInit {
	public anulacion_error_ruc:boolean;
	public anulacion_error_ruc_dos:boolean;
	public buscar_anulacion_operacion;
	public reiniciar_ticket;
	public ticket_anulacion_error_ruc;
	public pedido_anulacion_error_ruc;
	public ultima_boleta;
	public imprimir_anulacion_error_ruc;
	public descripcion_operacion_anulacion;
  	constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  		this.anulacion_error_ruc = true;
  		this.anulacion_error_ruc_dos = false
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
	  this.anulacion_error_ruc = true;
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
	verificarAnulacionOperacionDos(verificar_dos_nuevo){
		this._usu.validarOperacionTicketFacturaService(verificar_dos_nuevo).subscribe(
		  	res => {
		  		if(res["mensaje"].terminar){
						localStorage.clear();
						this._router.navigate(['/login']);
		  		}else{
		  			if(res["mensaje"].codigo == 'success'){
		  				this.anulacion_error_ruc_dos = false;	
		  				this.imprimir_anulacion_error_ruc = true;
		  				this.ultima_boleta = res["mensaje"].ultima_boleta;
		  			}else{
		  				if(res["mensaje"].codigo == 'info'){
		  					this.anulacion_error_ruc_dos = true;
		  					this.imprimir_anulacion_error_ruc = false;
		  					this.ultima_boleta = res["mensaje"].ultima_boleta;
		  				}else{
	  						if(res["mensaje"].codigo == 'warning'){
								this.showWarning("Alerta","La Factura no existe");
								this.anulacion_error_ruc_dos = false;
								this.imprimir_anulacion_error_ruc = false;
		  					}else{
		  						this.showError("Alerta","Aún no valida la Factura");
		  						this.anulacion_error_ruc_dos = false;
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
	  this._usu.guardarAnulacionOperacioneBdServiceErrorRucFactura(this.ultima_boleta,this.descripcion_operacion_anulacion,this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo == 'warning'){
	  					this.showError("Alerta","Ingresar Factura Válida");
	  				}else{
		  				if(res["mensaje"].codigo == 'success'){
		  					this.showSuccess("Alerta","Se guardo correctamente");
		  					this.anulacion_error_ruc = true;
		  					this.anulacion_error_ruc_dos = false;
		  					this.imprimir_anulacion_error_ruc = true;
		  				}else{
		  					this.showError("Alerta","Volver a Intentarlo - Error del internet");
		  				}
	  				}
	  			}
	  		},
	  		error => {
				this.showError("Alerta","Error de Internet");
	  		}
	  	);
  	}
}
