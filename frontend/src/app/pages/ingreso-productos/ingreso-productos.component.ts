import { Component, EventEmitter, Output } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ingreso-productos',
  templateUrl: './ingreso-productos.component.html',
  styleUrls: ['./ingreso-productos.component.css']
})
export class IngresoProductosComponent {

  @Output() modalCerrado: EventEmitter<any> = new EventEmitter<any>();
  producto: any = {};
  errorMessage!: string;
  successMessage!: String;

  constructor(private productoService: ProductoService) { }

  
  cerrarModal(){
    this.modalCerrado.emit();
  }

  guardarProducto() {

    this.errorMessage = ''
    this.successMessage = ''

    this.productoService.ingresarProducto(this.producto).pipe(

      tap(data => {
        this.successMessage = data.message;
        this.producto = {};
      }),
      catchError(
        e => {
          this.errorMessage = e.error.message;
          console.log(this.errorMessage);

          throw e
        }
      )

    ).subscribe();

  }

}