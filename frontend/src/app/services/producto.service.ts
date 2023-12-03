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
    return this.http.post<ProductoResponse>(`${url}crear/producto`,body);
  }

  obtenerProductos():Observable<Producto>{
    return this.http.get<Producto>(`${url}ver/productos`)
  }
}
