import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {
  public ticket;
  public inicio:boolean;
  constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router) {
    this.inicio = true;
  }
  showSuccess(titulo,mensaje) {
    this.toastr.success(mensaje, titulo);
  }
  showError(titulo,mensaje) {
    this.toastr.error(mensaje, titulo);
  }
  ngOnInit() {
  	this.obtenerTicket();
  }
  obtenerTicket(){
    this.inicio = false;
  	this._usu.obtenerPedidos().subscribe(
  		res => {
  			if(res["mensaje"].terminar){
				localStorage.clear();
				this._router.navigate(['/login']);
  			}else{
  				if(res["mensaje"].ticket){
  					this.ticket = res["mensaje"].ticket;
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
}
