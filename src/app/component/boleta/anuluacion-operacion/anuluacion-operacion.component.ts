import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-anuluacion-operacion',
  templateUrl: './anuluacion-operacion.component.html',
  styleUrls: ['./anuluacion-operacion.component.css']
})
export class AnuluacionOperacionComponent implements OnInit {
public anulacion_operacion;
public buscar_anulacion_operacion;
public reiniciar_ticket;
public ticket_anulacion_operacion;
public pedido_anulacion_operacion;
public anulacion_operacion_dos;
public imprimir_anulacion_operacion_dos;
public ultima_boleta;
public descripcion_operacion_anulacion;
public datos_opcionales;
  constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
		this.anulacion_operacion = true;
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
  buscarAnulacionOperactionRuc(){
	  this.anulacion_operacion = true;
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
	  				this.showSuccess("Alerta","Actualizado");
						this._usu.buscarAnulacionOperacionService(this.buscar_anulacion_operacion).subscribe(
					  		res => {
					  			if(res["mensaje"].terminar){
									localStorage.clear();
									this._router.navigate(['/login']);
					  			}else{
					  				if(res["mensaje"].ticket){
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
	  				this.anulacion_operacion_dos = false;	
	  				this.imprimir_anulacion_operacion_dos = true;
	  				this.ultima_boleta = res["mensaje"].ultima_boleta;
	  				this.datos_opcionales = res["mensaje"].normal;
	  			}else{
	  				if(res["mensaje"].codigo == 'info'){
	  					this.anulacion_operacion_dos = true;
	  					this.imprimir_anulacion_operacion_dos = false;
	  					this.ultima_boleta = res["mensaje"].ultima_boleta;
	  				}else{
  						if(res["mensaje"].codigo == 'warning'){
							this.showWarning("Alerta","La Boleta no existe");
							this.anulacion_operacion_dos = false;
							this.imprimir_anulacion_operacion_dos = false;
	  					}else{
	  						this.showError("Alerta","Aún no valida la Boleta");
	  						this.anulacion_operacion_dos = false;
	  						this.imprimir_anulacion_operacion_dos = false;
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
	  this._usu.guardarAnulacionOperacioneBdService(this.ultima_boleta,this.descripcion_operacion_anulacion,this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo = 'success'){
	  					this.showSuccess("Alerta","Se guardo correctamente");
	  					this.anulacion_operacion = true;
	  					this.anulacion_operacion_dos = false;
	  					this.imprimir_anulacion_operacion_dos = true;
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
  	imp(){
 	  	this._usu.imprimirGenerarFacturaNotaOBleta(this.buscar_anulacion_operacion).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo = 'success'){
	  					this.showSuccess("Alerta","Se generó Correctamente");
	  					this.verificarAnulacionOperacionDos(this.buscar_anulacion_operacion);

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
