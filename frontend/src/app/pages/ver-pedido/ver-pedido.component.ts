import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ver-pedido',
  templateUrl: './ver-pedido.component.html',
  styleUrls: ['./ver-pedido.component.css']
})
export class VerPedidoComponent implements OnInit {

  Id_pedido: any
  successMessage: String = '';
  errorMessage: String = '';
  pedido: any = {}
  fecha: any
  fecha_pedido:any
  editMode: boolean = false;
  editing: boolean = false;
  edit: boolean = false;
  cliente:any
  producto:any

  constructor(private pedidoService: PedidoService, private router: ActivatedRoute, 
    private clienteService: ClienteService, private productoService:ProductoService) { }

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {

      this.Id_pedido = params['id']
    })

    this.obtenerPedido()
    

  }

  editarPedido() {

    this.editMode = true;
    this.editing = true;
  }

  obtenerPedido() {

    this.pedidoService.obtenerPedido(this.Id_pedido).pipe(
      tap(data => {
        this.pedido.estado = data.estado
        this.pedido.id_cliente = data.id_cliente
        this.pedido.id_producto = data.id_producto
        this.pedido.porcentaje_mantenimiento = data.porcentaje_mantenimiento
        this.pedido.total = data.total


        const fecha = new Date(data.fecha_pedido)
        this.fecha_pedido = fecha.toISOString().split('T')[0];
        this.obtenerClienteProducto()
        
      }),
      catchError(e => {
        this.errorMessage = e.error
        throw e
      })
    ).subscribe()
  }
  guardarPedido() {
    const fechaSeleccionada = new Date(this.fecha_pedido)
    this.pedido.fecha_pedido = fechaSeleccionada.toISOString() 

    this.pedidoService.actualizarPedido(this.Id_pedido, this.pedido).pipe(
      tap(data => {      
        this.successMessage = data.message
        this.editMode = false;
        this.editing = false
        this.obtenerPedido()
      }),
      catchError(e => {
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()
  }

  obtenerClienteProducto(){
    this.clienteService.obtenerCliente(this.pedido.id_cliente).pipe(
      tap(cliente=>{
        this.cliente = cliente.nombres
        
      }),catchError(e =>{
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()

    this.productoService.obtenerProducto(this.pedido.id_producto).pipe(
      tap(producto=>{
        this.producto = producto.nombre
        
      }),catchError(e =>{
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()
  }

}
