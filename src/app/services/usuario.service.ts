import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { GLOBAL } from './global';	

@Injectable()
export class UsuarioService{

	public url: string;
	public token;
	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
	}
	login(user_to_login, gettoken = null){
		if(gettoken != null){
			user_to_login.gettoken = gettoken;
		}
		let params = JSON.stringify(user_to_login);
		let headers = new HttpHeaders({'Content-Type':'application/json'});
		return this._http.post(this.url+'/login/auth/login', params, {headers: headers});
	}
	getToken(){
		let token = localStorage.getItem('token');
		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}
		return this.token;
	}
	obtenerPedidos(){
		let params = new HttpParams();
		params = params.append('nuevo', 'nuevo');
		let headers = new HttpHeaders({'Content-Type':'application/json','Authorization': this.getToken()});
		return this._http.post(this.url+'/tickets/ticket/obtenerPedidos', params, {headers: headers});
	}
	obtenerPedidosClientePagar(id_pedido){
		let params = new HttpParams();
			params = params.append('id_pedido', id_pedido);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/obtenerPedidosClientePagar', params, {headers:headers});
	}
	buscarPedidoNombre(nombre){
		let params = new HttpParams();
			params = params.append('buscar_nombre', nombre);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/buscarProductoPedidoNombre', params, {headers:headers});
	}
	buscarPedidoCodigo(codigo){
		let params = new HttpParams();
			params = params.append('buscar_codigo', codigo);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/buscarProductoPedidoCodigo', params, {headers:headers});
	}
	agregarPedido(producto_unidad_id,cantidad,representacion,precio,id_producto,ticket,id_producto_sucursal){
		let params = new HttpParams();
			params = params.append('producto_unidad_id', producto_unidad_id);
			params = params.append('id_producto', id_producto);
			params = params.append('cantidad', cantidad);
			params = params.append('representacion', representacion);
			params = params.append('precio', precio);
			params = params.append('ticket', ticket);
			params = params.append('producto_sucursal', id_producto_sucursal);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/agregarPedido', params, {headers:headers});
	}
	eliminarPedidoTick(id_pedido){
		let params = new HttpParams();
			params = params.append('id_pedido', id_pedido);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/eliminarPedidosClientePagar', params, {headers:headers});
	}
	actualizarPedidoTick(id_pedido,cantidad,precio,representacion,producto_sucursal){
		let params = new HttpParams();
			params = params.append('id_pedido', id_pedido);
			params = params.append('cantidad', cantidad);
			params = params.append('precio', precio);
			params = params.append('representacion', representacion);
			params = params.append('producto_sucursal', producto_sucursal);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/actualizarPedidosClientePagar', params, {headers:headers});
	}
	enviarActualizarIdCarrito(data){
		let params = new HttpParams();
			params = params.append('data', data);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/actualizarPedidosParaImprimir', params, {headers:headers});
	}
	imprimirFactura(serie,id_ticket){
		let params = new HttpParams();
			params = params.append('serie', serie);
			params = params.append('id_ticket', id_ticket);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/imprimir', params, {headers:headers});
	}
	actualizarTipoPago(id_ticket,tipo_pago){
		let params = new HttpParams();
			params = params.append('id_ticket', id_ticket);
			params = params.append('tipo_pago', tipo_pago);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/actualizarTipoPago', params, {headers:headers});
	}
	//BOLETA
	buscarAnulacionOperacionService(serie){
		let params = new HttpParams();
			params = params.append('serie', serie);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/buscarAnulacionOperaciones', params, {headers:headers});
	}
	//FACTURA
	buscarAnulacionOperacionFacturaService(serie){
		let params = new HttpParams();
			params = params.append('serie', serie);
			/*params = params.append('idoperacion', operacion);*/
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/buscarAnulacionOperacionesFactura', params, {headers:headers});
	}
	//BOLETA
	anularItemOperacionService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/anularItemOperacion', params, {headers:headers});
	}
	//FACTURA
	anularItemOperacionFacturaService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/anularItemOperacionFactura', params, {headers:headers});
	}
	//BOLETA
	anularItemOperacionTicketService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/anularItemOperacionTicket', params, {headers:headers});
	}
	//FACTURA
	anularItemOperacionTicketFacturaService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/anularItemOperacionTicketFactura', params, {headers:headers});
	}
	//BOLETA
	validarOperacionTicketService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/validarOperacionTicket', params, {headers:headers});
	}
	//FACTURA
	validarOperacionTicketFacturaService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/validarOperacionTicketFactura', params, {headers:headers});
	}
	//BOLETA
	guardarAnulacionOperacioneBdService(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('tipo_nota', '1');
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/guardarAnulacionOperacioneBd', params, {headers:headers});
	}
	//FACTURA
	guardarAnulacionOperacioneBdFacturaService(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('tipo_nota', '1');
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/guardarAnulacionOperacioneBdFactura', params, {headers:headers});
	}
	//BOLETA
	guardarAnulacionOperacioneBdServiceErrorRuc(ultima_boleta,utlima_boleta,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('utlima_boleta', utlima_boleta);
			params = params.append('tipo_nota', '2');
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/guardarAnulacionOperacioneBdErrorRuc', params, {headers:headers});
	}
	//FACTURA
	guardarAnulacionOperacioneBdServiceErrorRucFactura(ultima_boleta,utlima_boleta,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('utlima_boleta', utlima_boleta);
			params = params.append('tipo_nota', '2');
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/guardarAnulacionOperacioneBdErrorRucFactura', params, {headers:headers});
	}
	//BOLETA
	guardarAnulacionOperacioneBdServiceDevolucionTotak(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/guardarAnulacionOperacioneBdDevolucionTotal', params, {headers:headers});
	}
	//FACTURA
	guardarAnulacionOperacioneBdServiceDevolucionTotakFactura(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/guardarAnulacionOperacioneBdDevolucionTotalFactura', params, {headers:headers});
	}
	//BOLETA
	guardarAnulacionOperacioneBdServiceDevolucionTotakDescripcion(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/guardarAnulacionOperacioneBdDevolucionTotalDescripcion', params, {headers:headers});
	}
	//FACTURA
	guardarAnulacionOperacioneBdServiceDevolucionTotakDescripcionFactura(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/guardarAnulacionOperacioneBdDevolucionTotalDescripcionFactura', params, {headers:headers});
	}
	//BOLETA
	obtenerIdPedidoBoletaService(id){
		let params = new HttpParams();
			params = params.append('codex', id);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/obtenerIdPedidoBoleta', params, {headers:headers});
	}
	//FACTURA
	obtenerIdPedidoBoletaServiceFactura(id){
		let params = new HttpParams();
			params = params.append('codex', id);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/obtenerIdPedidoBoletaFactura', params, {headers:headers});
	}
	//BOLETA
	cambiarNombreItemService(id,nombre_co){
		let params = new HttpParams();
			params = params.append('codex', id);
			params = params.append('nombre_co', nombre_co);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/cambiarNombreItem', params, {headers:headers});
	}
	//FACTURA
	cambiarNombreItemServiceFactura(id,nombre_co){
		let params = new HttpParams();
			params = params.append('codex', id);
			params = params.append('nombre_co', nombre_co);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/cambiarNombreItemFactura', params, {headers:headers});
	}
	//BOLETA
	validarOperacionTicketDescrpicionService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/validarOperacionTicketDescripcion', params, {headers:headers});
	}
	//FACTURA
	validarOperacionTicketDescrpicionServiceFactura(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/validarOperacionTicketDescripcionFactura', params, {headers:headers});
	}
	//BOLETA
	actualizarPedidoTickService(id_pedido,cantidad,precio,representacion,producto_sucursal){
		let params = new HttpParams();
			params = params.append('id_pedido', id_pedido);
			params = params.append('cantidad', cantidad);
			params = params.append('precio', precio);
			params = params.append('representacion', representacion);
			params = params.append('producto_sucursal', producto_sucursal);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/actualizarPedidosClientePagar', params, {headers:headers});
	}
	//FACTURA
	actualizarPedidoTickServiceFactura(id_pedido,cantidad,precio,representacion,producto_sucursal){
		let params = new HttpParams();
			params = params.append('id_pedido', id_pedido);
			params = params.append('cantidad', cantidad);
			params = params.append('precio', precio);
			params = params.append('representacion', representacion);
			params = params.append('producto_sucursal', producto_sucursal);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/actualizarPedidosClientePagarFactura', params, {headers:headers});
	}
	//BOLETA
	guardarAnulacionOperacioneBdDevolucionTotalDescripcionCantidadService(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/guardarAnulacionOperacioneBdDevolucionTotalDescripcionCantidad', params, {headers:headers});
	}
	//FACTURA
	guardarAnulacionOperacioneBdDevolucionTotalDescripcionCantidadServiceFactura(ultima_boleta,descripcion_operacion_anulacion,buscar_anulacion_operacion){
		let params = new HttpParams();
			params = params.append('serie', ultima_boleta);
			params = params.append('descripcion', descripcion_operacion_anulacion);
			params = params.append('serie_ticket_cliente', buscar_anulacion_operacion);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/guardarAnulacionOperacioneBdDevolucionTotalDescripcionCantidadFactura', params, {headers:headers});
	}
	imprimirGenerarFacturaOBleta(id){
		let params = new HttpParams();
			params = params.append('serie', id);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/tickets/ticket/imprimirGenerarFacturaOBleta', params, {headers:headers});
	}
	imprimirGenerarFacturaNotaOBleta(id){
		let params = new HttpParams();
			params = params.append('serie', id);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/imprimirNotasNube', params, {headers:headers});
	}
	imprimirGenerarFacturaNotaOBletaFactura(id){
		let params = new HttpParams();
			params = params.append('serie', id);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/factura/imprimirNotasNube', params, {headers:headers});
	}
}