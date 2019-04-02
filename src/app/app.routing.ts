import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Admin
import { InicioComponent} from './component/inicio/inicio.component';
import { LoginComponent} from './component/login/login.component';
import { CajaComponent } from './component/caja/caja.component';
import { CajaEditarComponent } from './component/caja-editar/caja-editar.component';
import { NotaCreditoBoletaComponent } from './component/nota-credito-boleta/nota-credito-boleta.component';
import { NotaCreditoFacturaComponent } from './component/nota-credito-factura/nota-credito-factura.component';
import { AdminGuard } from './services/admin.guard';

const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent},
	{path: 'inicio', component: InicioComponent, canActivate: [AdminGuard]},
	{path: 'caja', component: CajaComponent, canActivate: [AdminGuard]},
	{path: 'caja-editar/:id_ticket', component: CajaEditarComponent, canActivate: [AdminGuard]},
	{path: 'nota-credito-boleta', component: NotaCreditoBoletaComponent, canActivate: [AdminGuard]},
	{path: 'nota-credito-factura', component: NotaCreditoFacturaComponent, canActivate: [AdminGuard]},
	{path: '**', component: LoginComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: true, useHash:true });