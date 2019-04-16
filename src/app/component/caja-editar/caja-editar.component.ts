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
  public boleta_factura;
  public numero_boleta_factura;
  public inicio:boolean;
  public tipo_pago_cargar:boolean;
  public cargar_modal_producto:boolean;
  constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  	this.route.params.forEach(x => this.id_pedido = x['id_ticket']);
    this.inicio = true;
    this.tipo_pago_cargar = true;
    this.cargar_modal_producto = true;
    this.introduccion = true;
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
    this.inicio = false;
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
            this.boleta_factura = res["mensaje"].boleta_factura;
            this.numero_boleta_factura = res["mensaje"].numero_boleta_factura;
  					this.inicio = true;
  				}else{
  					this.showError("Alerta","No se Encuentran Productos");
            this.inicio = true;
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
        this.inicio = true;
  		}
  	);
  }
  buscarNombre(nombre){
    this.cargar_modal_producto = false;
    $('#tabla_precios').modal('show');
  	this._usu.buscarPedidoNombre(nombre).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].buscados){
  					this.pedido_buscado = res["mensaje"].buscados;
            this.cargar_modal_producto = true;
  					}else{
  					this.showError("Alerta","No se Encuentran Productos");
            this.cargar_modal_producto = true;
            $('#tabla_precios').modal('hide');
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
        $('#tabla_precios').modal('hide');
        this.cargar_modal_producto = true;
  		}
  	);
  }
  buscarCodigo(codigo){
    this.cargar_modal_producto = false;
    $('#tabla_precios').modal('show');
  	this._usu.buscarPedidoCodigo(codigo).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].buscados){
  					this.pedido_buscado = res["mensaje"].buscados;
            this.cargar_modal_producto = true;
  					}else{
  					this.showError("Alerta","No se Encuentran Productos");
            this.cargar_modal_producto = true;
            $('#tabla_precios').modal('hide');
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
        this.cargar_modal_producto = true;
        $('#tabla_precios').modal('hide');
  		}
  	);
  }
  agregarPedidoAlCarrito(producto_unidad_id,cantidad,representacion,precio,id_producto,id_producto_sucursal){
    this.cargar_modal_producto = false;
  	this._usu.agregarPedido(producto_unidad_id,cantidad,representacion,precio,id_producto,this.id_pedido,id_producto_sucursal).subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].codigo == 'success'){
  					this.obtenerPedido();
  					this.showSuccess("Alerta","Se agregó correctamente");
            this.cargar_modal_producto = true;
  				}else{
  					this.showError("Alerta",res["mensaje"].msg);
            this.cargar_modal_producto = true;
  				}
  			}
  		},
  		error => {
  			this.showError("Alerta","Error de Internet");
        this.cargar_modal_producto = true;
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
  					this.showSuccess("Alerta","Se Eliminó correctamente");
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
              this.obtenerPedido();
	  				}
	  			}
	  		},
	  		error => {
	  			this.showError("Alerta","Error de Internet");
	  		}
	  	);
  }
  imprimirFac(serie){
    this.introduccion = false;
	  this._usu.imprimirFactura(serie,this.id_pedido).subscribe(
	  		res => {
	  			if(res["mensaje"].terminar){
					localStorage.clear();
					this._router.navigate(['/login']);
	  			}else{
	  				if(res["mensaje"].codigo == 'success'){
	  					this.showSuccess("Alerta", res["mensaje"].msg);
              this.obtenerPedido();
              this.introduccion = true;
	  				}else{
	  					this.showError("Alerta", res["mensaje"].msg);
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
  agregarTipoPago(agregarTipoPago){
      this.tipo_pago_cargar = false;
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
                this.tipo_pago_cargar = true;
		  				}else{
		  					this.showError("Alerta", res["mensaje"].msg);
                this.tipo_pago_cargar = true;
		  				}
		  			}
		  		},
		  		error => {
		  			this.showError("Alerta","Error de Internet");
            this.tipo_pago_cargar = true;
		  		}
		  	);
  }
  imprimirFacturaOBoleta(){
    this.introduccion = false;
    this._usu.imprimirGenerarFacturaOBleta(this.id_pedido).subscribe(
        res => {
          if(res["mensaje"].terminar){
          localStorage.clear();
          this._router.navigate(['/login']);
          }else{
            if(res["mensaje"].codigo == 'success'){
              this.showSuccess("Alerta", res["mensaje"].msg);
              this.obtenerPedido();
              this.introduccion = true;
            }else{
              this.showError("Alerta", res["mensaje"].msg);
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
}
