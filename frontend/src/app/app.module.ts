import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { IngresoClientesComponent } from './pages/ingreso-clientes/ingreso-clientes.component';
import { IngresoProductosComponent } from './pages/ingreso-productos/ingreso-productos.component';
import { IngresoPedidosComponent } from './pages/ingreso-pedidos/ingreso-pedidos.component';
import { VerPedidosComponent } from './pages/ver-pedidos/ver-pedidos.component';
import { VerProductosComponent } from './pages/ver-productos/ver-productos.component';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { VerClienteComponent } from './pages/ver-cliente/ver-cliente.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { VerPedidoComponent } from './pages/ver-pedido/ver-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { AboutComponent } from './pages/about/about.component';

export const url = 'http://localhost:8080/api/v1/';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IngresoClientesComponent,
    IngresoProductosComponent,
    IngresoPedidosComponent,
    VerPedidosComponent,
    VerProductosComponent,
    VerClientesComponent,
    VerClienteComponent,
    VerProductoComponent,
    VerPedidoComponent,
    NavBarComponent,
    FormatDatePipe,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
