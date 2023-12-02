import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nombre: string = '';
  email: string = '';
  telefono: string = '';

  constructor(private http: HttpClient) { }

  guardarCliente() {
    const nuevoCliente = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono
    };

    // Aquí puedes enviar los datos al backend usando HttpClient de Angular
    this.http.post<any>('http://tu-servidor-backend.com/api/clientes', nuevoCliente)
      .subscribe(response => {
        console.log('Cliente guardado:', response);
        // Puedes realizar acciones adicionales después de guardar el cliente
      }, error => {
        console.error('Error al guardar el cliente:', error);
      });
  }
}
