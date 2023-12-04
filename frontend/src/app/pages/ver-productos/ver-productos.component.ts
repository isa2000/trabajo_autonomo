import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  errorMessage:String = ''
  productos:any = []
  succesMessage:String = ''
  producto_id:any

  constructor(private productoService:ProductoService, private router: Router){}
  ngOnInit(): void {
    this.obtenerProductos()
  }

  

  verProducto(id:number){
    this.router.navigate(['/ver-producto'], { queryParams: { id: id} });

  }

  eliminarProducto(id:number){

    
    this.productoService.eliminarProducto(id).pipe(
      tap(data =>{
        this.succesMessage = data.message
        this.obtenerProductos()
      }),
      catchError(e =>{
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()

  }

  obtenerProductos(){
    this.productoService.obtenerProductos().pipe(
      tap(data => {
        this.productos = Object.values(data)       
      }),
      catchError(e => {
        this.errorMessage = e.error.message;
        console.log(this.errorMessage);

        throw e
      })
    ).subscribe()
  }

  actualizarProductos() {
    this.obtenerProductos()
  }

}
