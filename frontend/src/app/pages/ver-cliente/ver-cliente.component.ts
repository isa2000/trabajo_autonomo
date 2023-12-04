import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  id_cliente: any
  successMessage: String = '';
  errorMessage: String = '';
  cliente: any = {}
  fecha: any
  fecha_nacimiento:any
  editMode: boolean = false;
  editing: boolean = false;

  constructor(private clienteService: ClienteService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.queryParams.subscribe(params => {

      this.id_cliente = params['id']
    })

    this.obtenerCliente()

  }

  editarCliente() {

    this.editMode = true;
    this.editing = true;
  }

  obtenerCliente() {

    this.clienteService.obtenerCliente(this.id_cliente).pipe(
      tap(data => {
        this.cliente.nombres = data.nombres
        this.cliente.email = data.email
        this.cliente.cedula = data.cedula
        this.cliente.telefono = data.telefono

        const fecha = new Date(data.fecha_nacimiento)
        this.fecha_nacimiento = fecha.toISOString().split('T')[0];
      }),
      catchError(e => {
        this.errorMessage = e.error
        throw e
      })
    ).subscribe()
  }
  guardarCliente() {
    const fechaSeleccionada = new Date(this.fecha_nacimiento)
    this.cliente.fecha_nacimiento = fechaSeleccionada.toISOString() 

    console.log(this.cliente.fecha_nacimiento);
    

    this.clienteService.actualizarCliente(this.id_cliente, this.cliente).pipe(
      tap(data => {      
        this.successMessage = data.message
        this.editMode = false;
        this.editing = false
        this.obtenerCliente()
      }),
      catchError(e => {
        this.errorMessage = e.error.message
        throw e
      })
    ).subscribe()
  }


}
