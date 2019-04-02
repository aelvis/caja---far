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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavAdminComponent,
    CajaComponent,
    CajaEditarComponent,
    NotaCreditoBoletaComponent,
    NotaCreditoFacturaComponent
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
