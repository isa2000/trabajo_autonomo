import { Component, EventEmitter, Output } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-ingreso-clientes',
  templateUrl: './ingreso-clientes.component.html',
  styleUrls: ['./ingreso-clientes.component.css']
})
export class IngresoClientesComponent {


  @Output() modalCerrado: EventEmitter<any> = new EventEmitter<any>();
  cliente: any = {};
  errorMessage!: string;
  fecha: any
  successMessage!: String;

  constructor(private clienteService: ClienteService) { }

  cerrarModal(){
    this.modalCerrado.emit();
  }

  guardarCliente() {

    this.errorMessage = ''
    this.successMessage = ''
    const fechaSeleccionada = new Date(this.fecha)
    this.cliente.fecha_nacimiento = fechaSeleccionada.toISOString();

    this.clienteService.ingresarCliente(this.cliente).pipe(

      tap(data => {
        this.successMessage = data.message;
        this.cliente = {};
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

    this.cliente

  }

}
