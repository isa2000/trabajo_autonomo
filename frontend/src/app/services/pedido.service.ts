import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoResponse } from '../interfaces/pedido-response';
import { url } from '../app.module';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  ingresarPedido(body:any): Observable<PedidoResponse>{
    return this.http.post<PedidoResponse>(`${url}crear/pedido`,body);
  }
}
