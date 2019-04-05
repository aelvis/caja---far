import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-devolucion-total',
  templateUrl: './devolucion-total.component.html',
  styleUrls: ['./devolucion-total.component.css']
})
export class DevolucionTotalComponent implements OnInit {
	public devolucion_total:boolean;
  	constructor(private toastr: ToastrService,private _usu: UsuarioService, private _router: Router, private route: ActivatedRoute) { 
  		this.devolucion_total = true;
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

}
