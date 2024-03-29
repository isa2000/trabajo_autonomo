import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ingreso-pedidos',
  templateUrl: './ingreso-pedidos.component.html',
  styleUrls: ['./ingreso-pedidos.component.css']
})
export class IngresoPedidosComponent implements OnInit {

  @Output() modalCerrado: EventEmitter<any> = new EventEmitter<any>();
  pedido: any = {};
  errorMessage!: string;
  fecha: any
  successMessage!: String;
  clientes: any = []
  productos: any = []

  constructor(private pedidoService: PedidoService, private clienteService: ClienteService, private productoService: ProductoService) { }
  ngOnInit(): void {

    this.clienteService.obtenerClientes().pipe(
      tap(data => {
        this.clientes = Object.values(data)
      }),
      catchError(e => {
        this.errorMessage = e.error.message;
        console.log(this.errorMessage);

        throw e
      })
    ).subscribe()

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

  
  cerrarModal(){
    this.modalCerrado.emit();
  }
  guardarPedido() {

    this.errorMessage = ''
    this.successMessage = ''
    const fechaSeleccionada = new Date(this.fecha)
    this.pedido.fecha_pedido = fechaSeleccionada.toISOString()


    this.pedido.id_cliente = parseInt(this.pedido.id_cliente)

    this.pedido.id_producto = parseInt(this.pedido.id_producto)

    this.pedidoService.ingresarPedido(this.pedido).pipe(

      tap(data => {
        this.successMessage = data.message;
        this.pedido = {};
        this.fecha = ''
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
