import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-correcion-descripcion',
  templateUrl: './correcion-descripcion.component.html',
  styleUrls: ['./correcion-descripcion.component.css']
})
export class CorrecionDescripcionComponent implements OnInit {
	public correcion_error_descripcion:boolean;
	public buscar_anulacion_operacion;
	public reiniciar_ticket;
	public ticket_anulacion_error_ruc;
	public pedido_anulacion_error_ruc;
	public correcion_error_descripcion_dos:boolean;
	public enviar_nueva_descripcion;
	public data;
	public imprimir_anulacion_error_ruc:boolean;
	public ultima_boleta;
	public descripcion_operacion_anulacion;
  	constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
   		this.correcion_error_descripcion = true;
   		this.correcion_error_descripcion_dos = false;
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
	showInfo(titulo,mensaje){
		this.toastr.info(mensaje, titulo);
	}
  	buscarAnulacionOperactionRuc(){
	  this.correcion_error_descripcion = true;
	  this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].ticket){
	  					$("#anulacionErrorRuc").modal("show");
	  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
	  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
	  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
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
		  				this.showSuccess("Alerta","Actualizado");
							this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
						  		res => {
						  			if(res["mensaje"].terminar){
										localStorage.clear();
										this._router.navigate(['/login']);
						  			}else{
						  				if(res["mensaje"].ticket){
						  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
						  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
						  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
											
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
  	actulizarItemOperacionController(id){
 	  	this._usu.obtenerIdPedidoBoletaService(id).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo == 'success'){
	  					$("#acu").modal("show");
	  					this.data = res["mensaje"].data;
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
  	cambiarNombreItemController(id){
 	  	this._usu.cambiarNombreItemService(id,this.enviar_nueva_descripcion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo == 'success'){
	  					$("#acu").modal("hide");
	  					this.enviar_nueva_descripcion = '';
							this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
						  		res => {
						  			if(res["mensaje"].terminar){
										localStorage.clear();
										this._router.navigate(['/login']);
						  			}else{
						  				if(res["mensaje"].ticket){
						  					this.reiniciar_ticket = res["mensaje"].reiniciar_ticket;
						  					this.pedido_anulacion_error_ruc = res["mensaje"].pedido;
						  					this.ticket_anulacion_error_ruc = res["mensaje"].ticket;
											
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
	  					this.showError("Alerta","Internet lento - Volver a Intentarlo");
	  				}
	  			}
	  		},
	  		error => {
				this.showError("Alerta","Error de Internet");
	  		}
	  	);
  	}
	verificarAnulacionOperacionDos(verificar_dos_nuevo){
		this._usu.validarOperacionTicketDescrpicionService(verificar_dos_nuevo).subscribe(
		  	res => {
		  		if(res["mensaje"].terminar){
						localStorage.clear();
						this._router.navigate(['/login']);
		  		}else{
		  			if(res["mensaje"].codigo == 'linda'){
		  				this.showInfo("Alerta","Agregar Descripción a los Productos");
						this.correcion_error_descripcion_dos = false;
						this.imprimir_anulacion_error_ruc = false;
		  			}else{
			  			if(res["mensaje"].codigo == 'success'){
			  				this.correcion_error_descripcion_dos = false;	
			  				this.imprimir_anulacion_error_ruc = true;
			  				this.ultima_boleta = res["mensaje"].ultima_boleta;
			  			}else{
			  				if(res["mensaje"].codigo == 'info'){
			  					this.correcion_error_descripcion_dos = true;
			  					this.imprimir_anulacion_error_ruc = false;
			  					this.ultima_boleta = res["mensaje"].ultima_boleta;
			  				}else{
		  						if(res["mensaje"].codigo == 'warning'){
									this.showWarning("Alerta","La Boleta no existe");
									this.correcion_error_descripcion_dos = false;
									this.imprimir_anulacion_error_ruc = false;
			  					}else{
			  						this.showError("Alerta","Aún no valida la Boleta");
			  						this.correcion_error_descripcion_dos = false;
			  						this.imprimir_anulacion_error_ruc = false;
			  					}
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
	  this._usu.guardarAnulacionOperacioneBdServiceDevolucionTotakDescripcion(this.ultima_boleta,this.descripcion_operacion_anulacion,this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo = 'success'){
	  					this.showSuccess("Alerta","Se guardo correctamente");
	  					this.correcion_error_descripcion = true;
	  					this.correcion_error_descripcion_dos = false;
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
  	cerrarModal(){
  		$("#anulacionErrorRuc").modal("hide");
  		this.correcion_error_descripcion = true;
	  	this.correcion_error_descripcion_dos = false;
	  	this.imprimir_anulacion_error_ruc = false;
  	}
}
