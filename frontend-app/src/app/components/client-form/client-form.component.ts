import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import Swal from 'sweetalert2';

@Component({
  selector: 'client-form',
  standalone: true, // Componente Standalone
  imports: [FormsModule, CommonModule], // Importa ListClientComponent y CommonModule
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  documentType: string = '';
  documentNumber: string = '';
  isButtonDisabled: boolean = true;

  documentTypes = [
    { value: '', label: 'Seleccionar Tipo de Documento' },
    { value: 'cc', label: 'Cédula de Ciudadanía' },
    { value: 'pasaporte', label: 'Pasaporte' },
  ];

  constructor(private router: Router) {}

  onInputChange() {
    // Validar los campos: tipo y número de documento
    const isValid =
      this.documentType &&
      this.documentNumber.length >= 8 &&
      this.documentNumber.length <= 11 &&
      !isNaN(Number(this.documentNumber));
    this.isButtonDisabled = !isValid;
  }

  onSearch() {
    // Verificar si el formulario es válido
    if (this.documentType === '' || this.documentNumber === '') {
      // Mostrar alerta de SweetAlert2 si algún campo es inválido
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos del formulario.',
      });
    } else if (
      this.documentNumber.length < 8 ||
      this.documentNumber.length > 11 ||
      isNaN(Number(this.documentNumber))
    ) {
      // Mostrar alerta si el número de documento no es válido
      Swal.fire({
        icon: 'error',
        title: 'Número de documento inválido',
        text: 'El número de documento debe tener entre 8 y 11 dígitos y contener solo números.',
      });
    } else {
      // Si todo es válido, navegar al resumen
      this.router.navigate(['/summary'], {
        queryParams: {
          documentType: this.documentType,
          documentNumber: this.documentNumber,
        },
      });
    }
  }
}
