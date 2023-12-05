import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoResponse } from '../interfaces/producto-response';
import { url } from '../app.module';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  ingresarProducto(body:any): Observable<ProductoResponse>{
    return this.http.post<ProductoResponse>(`${url}microservice/crear/producto`,body);
  }

  obtenerProductos():Observable<Producto>{
    return this.http.get<Producto>(`${url}microservice/ver/productos`)
  }
  obtenerProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${url}microservice/ver/producto/${id}`)
  }

  eliminarProducto(id:number):Observable<ProductoResponse>{
    return this.http.delete<ProductoResponse>(`${url}microservice/eliminar/producto/${id}`)
  }

  actualizarProducto(id:number, body:any):Observable<ProductoResponse>{
    return this.http.patch<ProductoResponse>(`${url}microservice/actualizar/producto/${id}`, body)
  }
}
