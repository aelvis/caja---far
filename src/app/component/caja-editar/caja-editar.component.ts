import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-caja-editar',
  templateUrl: './caja-editar.component.html',
  styleUrls: ['./caja-editar.component.css']
})
export class CajaEditarComponent implements OnInit {
  public pedido:any = [];
  public id_pedido;
  public pedido_buscado;
  public introduccion:boolean;
  public total:number;
  public imprimir:number;
  public obtener:any = [];
  public nuevo_item:any = [];
  public letrero;
  public tipo_pago;
  constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  	this.route.params.forEach(x => this.id_pedido = x['id_ticket']);
  }
  showSuccess(titulo,mensaje) {
    this.toastr.success(mensaje, titulo);
  }
  showError(titulo,mensaje) {
    this.toastr.error(mensaje, titulo);
  }
  ngOnInit() {
  	this.obtenerPedido();
  }
  obtenerPedido(){
  	this._usu.obtenerPedidosClientePagar(this.id_pedido).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].ped){
  					this.pedido = res["mensaje"].ped;
  					this.total = res["mensaje"].total;
  					this.imprimir = res["mensaje"].imprimir;
  					this.tipo_pago = res["mensaje"].ticket;
  					this.introduccion = true;
  				}else{
  					this.showError("Alerta","No se Encuentran Productos");
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
  		}
  	);
  }
  buscarNombre(nombre){
  	this._usu.buscarPedidoNombre(nombre).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].buscados){
  					this.pedido_buscado = res["mensaje"].buscados;
  					$('#tabla_precios').modal('show')
  					}else{
  					this.showError("Alerta","No se Encuentran Productos");
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
  		}
  	);
  }
  buscarCodigo(codigo){
  	this._usu.buscarPedidoCodigo(codigo).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].buscados){
  					this.pedido_buscado = res["mensaje"].buscados;
  					$('#tabla_precios').modal('show');
  					}else{
  					this.showError("Alerta","No se Encuentran Productos");
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
  		}
  	);
  }
  agregarPedidoAlCarrito(producto_unidad_id,cantidad,representacion,precio,id_producto,id_producto_sucursal){
  	this._usu.agregarPedido(producto_unidad_id,cantidad,representacion,precio,id_producto,this.id_pedido,id_producto_sucursal).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].codigo == 'success'){
  					this.obtenerPedido();
  					this.showSuccess("Alerta","Se agregó correctamente");
  				}else{
  					this.showError("Alerta",res["mensaje"].msg);
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
  		}
  	);
  }
  eliminarPedidoCarritoCompras(id_pedido){
  	this.introduccion = false;
  	this._usu.eliminarPedidoTick(id_pedido).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].codigo == 'success'){
  					this.obtenerPedido();
  					this.showSuccess("Alerta","Se Actualizó correctamente");
  					this.introduccion = true;
  				}else{
  					this.showError("Alerta",res["mensaje"].msg);
  					this.introduccion = true;
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
  			this.introduccion = true;
  		}
  	); 	
  }
  actualizarPedidoAlCarrito(id_pedido,cantidad,precio,representacion,producto_sucursal){
  	this.introduccion = false;
  	this._usu.actualizarPedidoTick(id_pedido,cantidad,precio,representacion,producto_sucursal).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].codigo == 'success'){
  					this.obtenerPedido();
  					this.showSuccess("Alerta","Se Actualizó correctamente");
  					this.introduccion = true;
  				}else{
  					this.showError("Alerta",res["mensaje"].msg);
  					this.introduccion = true;
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
  			this.introduccion = true;
  		}
  	); 
  }
  cerrarModalPrecio(){
  		$('#tabla_precios').modal('hide');
  		this.pedido_buscado = [];
  }
    obtenerPedidoActualizadosEnviar(){
  		for (var i = 0; i < this.pedido.length; i++) {
  			if(this.pedido[i].estado == '2'){
			this.obtener[i] = this.pedido[i].id;
  			}	
  		}
  		return this.obtener;
  	}
  mandarCaja(){
  	this.obtenerPedidoActualizadosEnviar();
	this._usu.enviarActualizarIdCarrito(this.obtener).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo == 'success'){
	  					this.obtenerPedido();
              this.showSuccess("Alerta", 'ACTUALIZADO CORRECTO');
	  				}else{
	  					this.showError("Alerta", 'HAY PRODUCTOS QUE NO TIENEN STOCK');
	  				}
	  			}
	  		},
	  		error => {
	  			this.showError("Alerta","Error de Internet");
	  		}
	  	);
  }
  imprimirFac(){
	this._usu.imprimirFactura().subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].success){
	  					this.showSuccess("Alerta", res["mensaje"].success);
	  				}else{
	  					this.showError("Alerta", res["mensaje"].danger);
	  				}
	  			}
	  		},
	  		error => {
	  			this.showError("Alerta","Error de Internet");
	  		}
	  	);
  }
  	agregarTipoPago(agregarTipoPago){
	  	this._usu.actualizarTipoPago(this.id_pedido,agregarTipoPago).subscribe(
		  		res => {
		  			if(res["mensaje"].terminar){
						localStorage.clear();
						this._router.navigate(['/login']);
		  			}else{
		  				if(res["mensaje"].codigo == 'success'){
                this.imprimir = 0;
                this.tipo_pago = "";
		  					this.obtenerPedido();
		  					this.showSuccess("Alerta", res["mensaje"].msg);
		  				}else{
		  					this.showError("Alerta", res["mensaje"].msg);
		  				}
		  			}
		  		},
		  		error => {
		  			this.showError("Alerta","Error de Internet");
		  		}
		  	);
  	}
}
