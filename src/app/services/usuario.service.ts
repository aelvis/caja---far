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
	buscarAnulacionOperacionService(serie){
		let params = new HttpParams();
			params = params.append('serie', serie);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/buscarAnulacionOperaciones', params, {headers:headers});
	}
	anularItemOperacionService(codex){
		let params = new HttpParams();
			params = params.append('codex', codex);
		let headers = new HttpHeaders({
			'Content-Type':'application/json',
			'Authorization': this.getToken()
		});
		return this._http.post(this.url+'/notas/credito/anularItemOperacion', params, {headers:headers});
	}
}