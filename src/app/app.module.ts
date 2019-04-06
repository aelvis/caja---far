import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AdminGuard } from './services/admin.guard';
import { UsuarioService } from './services/usuario.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { InicioComponent} from './component/inicio/inicio.component';
import { NavAdminComponent} from './component/partial/partial.component';
import { CajaComponent } from './component/caja/caja.component';
import { CajaEditarComponent } from './component/caja-editar/caja-editar.component';
import { NotaCreditoBoletaComponent } from './component/nota-credito-boleta/nota-credito-boleta.component';
import { NotaCreditoFacturaComponent } from './component/nota-credito-factura/nota-credito-factura.component';
import { AnuluacionOperacionComponent } from './component/boleta/anuluacion-operacion/anuluacion-operacion.component';
import { AnuluacionErrorRucComponent } from './component/boleta/anuluacion-error-ruc/anuluacion-error-ruc.component';
import { DevolucionTotalComponent } from './component/boleta/devolucion-total/devolucion-total.component';
import { CorrecionDescripcionComponent } from './component/boleta/correcion-descripcion/correcion-descripcion.component';
import { DevolucionItemComponent } from './component/boleta/devolucion-item/devolucion-item.component';
import { AnulacionOperacionFacturaComponent } from './anulacion-operacion-factura/anulacion-operacion-factura.component';
import { AnulacionErrorRucFacturaComponent } from './anulacion-error-ruc-factura/anulacion-error-ruc-factura.component';
import { DescuentoTotalFacturaComponent } from './descuento-total-factura/descuento-total-factura.component';
import { DevolucionTotalFacturaComponent } from './devolucion-total-factura/devolucion-total-factura.component';
import { CoreccionDescripcionFacturaComponent } from './coreccion-descripcion-factura/coreccion-descripcion-factura.component';
import { DevolucionItemFacturaComponent } from './devolucion-item-factura/devolucion-item-factura.component';
import { DescuentoItemFacturaComponent } from './descuento-item-factura/descuento-item-factura.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavAdminComponent,
    CajaComponent,
    CajaEditarComponent,
    NotaCreditoBoletaComponent,
    NotaCreditoFacturaComponent,
    AnuluacionOperacionComponent,
    AnuluacionErrorRucComponent,
    DevolucionTotalComponent,
    CorrecionDescripcionComponent,
    DevolucionItemComponent,
    AnulacionOperacionFacturaComponent,
    AnulacionErrorRucFacturaComponent,
    DescuentoTotalFacturaComponent,
    DevolucionTotalFacturaComponent,
    CoreccionDescripcionFacturaComponent,
    DevolucionItemFacturaComponent,
    DescuentoItemFacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    UsuarioService,
    AdminGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
