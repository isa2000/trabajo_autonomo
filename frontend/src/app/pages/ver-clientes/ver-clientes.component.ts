import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {

  @ViewChild('modalIngresoClientes') modalIngresoClientes: any;

  errorMessage:String = ''
  clientes:any = []
  succesMessage:String = ''
  cliente_id:any

  constructor(private clienteService:ClienteService, private router: Router){}
  ngOnInit(): void {
    this.obtenerClientes()
  }

  

  verCliente(id:number){
    this.router.navigate(['/ver-cliente'], { queryParams: { id: id} });

  }

  eliminarCliente(id:number){

    
    this.clienteService.eliminarCliente(id).pipe(
      tap(data =>{
        this.succesMessage = data.message
        this.obtenerClientes()
      }),
      catchError(e =>{
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()

  }

  obtenerClientes(){
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
  }

  actualizarClientes() {
    this.obtenerClientes()
  }

}
