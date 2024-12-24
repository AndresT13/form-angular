import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { EnableButtonDirective } from '../../directives/enable-button.directive';
import { ListClientComponent } from '../list-client/list-client.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'client-form',
  standalone: true,
  imports: [
    FormsModule,
    EnableButtonDirective,
    ListClientComponent,
    CommonModule,
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css',
})
export class ClientFormComponent {
  tipoDocumento: string = ''; // Tipo de documento
  numeroDocumento: number = 0; // Número de documento
  resultadosFiltrados: any[] = []; // Resultados filtrados para mostrar
  botonBuscarHabilitado: boolean = false; // Habilitación del botón de búsqueda

  constructor(private clientService: ClientService) {}
  onInputChange(): void {
    this.verificarBoton();
  }

  verificarBoton(): void {
    this.botonBuscarHabilitado =
      this.tipoDocumento.trim() !== '' && this.numeroDocumento !== null;
  }

  onBuscar(): void {
    if (this.botonBuscarHabilitado) {
      this.clientService
        .buscarUsuarios(this.tipoDocumento, this.numeroDocumento)
        .subscribe((resultados) => {
          if (resultados.length === 0) {
            this.resultadosFiltrados = [];
            alert(
              'No se encontraron resultados para los criterios especificados.'
            );
          } else {
            this.resultadosFiltrados = resultados;
          }
        });
    }
  }
}
