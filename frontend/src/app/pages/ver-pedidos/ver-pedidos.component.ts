import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-ver-pedidos',
  templateUrl: './ver-pedidos.component.html',
  styleUrls: ['./ver-pedidos.component.css']
})
export class VerPedidosComponent {

  errorMessage:String = ''
  pedidos:any = []
  succesMessage:String = ''
  cliente_id:any

  constructor(private pedidoService:PedidoService, private router: Router){}
  ngOnInit(): void {
    this.obtenerPedidos()
  }

  

  verPedido(id:number){
    this.router.navigate(['/ver-pedido'], { queryParams: { id: id} });

  }

  eliminarPedido(id:number){

    
    this.pedidoService.eliminarPedido(id).pipe(
      tap(data =>{
        this.succesMessage = data.message
        this.obtenerPedidos()
      }),
      catchError(e =>{
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()

  }

  obtenerPedidos(){
    this.pedidoService.obtenerPedidos().pipe(
      tap(data => {
        this.pedidos = Object.values(data)    
       
           
      }),
      catchError(e => {
        this.errorMessage = e.error.message;
        console.log(this.errorMessage);

        throw e
      })
    ).subscribe()
  }

  actualizarPedidos() {
    this.obtenerPedidos()
  }

}
