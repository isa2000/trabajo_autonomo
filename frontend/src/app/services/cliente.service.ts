import { Injectable } from '@angular/core';
import { url } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente} from '../interfaces/cliente'
import { ClienteResponse } from '../interfaces/clienteResponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  ingresarCliente(body:any): Observable<ClienteResponse>{
    return this.http.post<ClienteResponse>(`${url}monolitico/crear/cliente`,body);
  }

  obtenerClientes():Observable<Cliente>{
    return this.http.get<Cliente>(`${url}monolitico/ver/clientes`)
  }

  obtenerCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${url}monolitico/ver/cliente/${id}`)
  }

  eliminarCliente(id:number):Observable<ClienteResponse>{
    return this.http.delete<ClienteResponse>(`${url}monolitico/eliminar/cliente/${id}`)
  }

  actualizarCliente(id:number, body:any):Observable<ClienteResponse>{
    return this.http.patch<ClienteResponse>(`${url}monolitico/actualizar/cliente/${id}`, body)
  }
}
