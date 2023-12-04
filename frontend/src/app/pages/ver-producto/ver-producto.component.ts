import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit{

  id_producto: any
  successMessage: String = '';
  errorMessage: String = '';
  producto: any = {}
  fecha: any
  fecha_pedido:any
  editMode: boolean = false;
  editing: boolean = false;
  edit: boolean = false;

  constructor(private productoService: ProductoService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {

      this.id_producto = params['id']
    })

    this.obtenerProducto()

  }

  editarProducto() {

    this.editMode = true;
    this.editing = true;
  }

  obtenerProducto() {

    this.productoService.obtenerProducto(this.id_producto).pipe(
      tap(data => {
        this.producto.nombre = data.nombre
        this.producto.descripcion = data.descripcion
        this.producto.precio= data.precio

      }),
      catchError(e => {
        this.errorMessage = e.error
        throw e
      })
    ).subscribe()
  }
  guardarProducto() {
    
    this.productoService.actualizarProducto(this.id_producto, this.producto).pipe(
      tap(data => {      
        this.successMessage = data.message
        this.editMode = false;
        this.editing = false
        this.obtenerProducto()
      }),
      catchError(e => {
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()
  }


}
