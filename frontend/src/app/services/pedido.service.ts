import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoResponse } from '../interfaces/pedido-response';
import { url } from '../app.module';
import { Pedido } from '../interfaces/pedido';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  ingresarPedido(body:any): Observable<PedidoResponse>{
    return this.http.post<PedidoResponse>(`${url}crear/pedido`,body);
  }
  obtenerPedidos():Observable<Pedido>{
    return this.http.get<Pedido>(`${url}ver/pedidos`)
  }

  obtenerPedido(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(`${url}ver/pedido/${id}`)
  }

  eliminarPedido(id:number):Observable<PedidoResponse>{
    return this.http.delete<PedidoResponse>(`${url}eliminar/pedido/${id}`)
  }

  actualizarPedido(id:number, body:any):Observable<PedidoResponse>{
    return this.http.patch<PedidoResponse>(`${url}actualizar/pedido/${id}`, body)
  }
}
