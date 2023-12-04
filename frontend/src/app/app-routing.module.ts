import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoClientesComponent } from './pages/ingreso-clientes/ingreso-clientes.component';
import { IngresoPedidosComponent } from './pages/ingreso-pedidos/ingreso-pedidos.component';
import { IngresoProductosComponent } from './pages/ingreso-productos/ingreso-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { VerProductosComponent } from './pages/ver-productos/ver-productos.component';
import { VerPedidosComponent } from './pages/ver-pedidos/ver-pedidos.component';
import { VerClienteComponent } from './pages/ver-cliente/ver-cliente.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { VerPedidoComponent } from './pages/ver-pedido/ver-pedido.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'ingreso-clientes', component:IngresoClientesComponent},
  {path:'ingreso-pedidos', component:IngresoPedidosComponent},
  {path:'ingreso-productos',component:IngresoProductosComponent},
  {path:'listar-clientes',component:VerClientesComponent},
  {path:'listar-productos',component:VerProductosComponent},
  {path:'listar-pedidos',component:VerPedidosComponent},
  {path:'ver-cliente',component:VerClienteComponent},
  {path:'ver-producto',component:VerProductoComponent},
  {path:'ver-pedido',component:VerPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
