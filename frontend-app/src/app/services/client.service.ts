import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private usuarios = [
    { tipoDocumento: 'Cédula', numeroDocumento: 12345678 },
    { tipoDocumento: 'Pasaporte', numeroDocumento: 98765432 },
    { tipoDocumento: 'Cédula', numeroDocumento: 87654321 },
  ];

  // Método para realizar la búsqueda
  buscarUsuarios(
    tipoDocumento: string,
    numeroDocumento: number
  ): Observable<any[]> {
    // Filtra los usuarios por tipo de documento y número de documento
    const resultados = this.usuarios.filter(
      (usuario) =>
        usuario.tipoDocumento.toLowerCase() === tipoDocumento.toLowerCase() &&
        usuario.numeroDocumento === numeroDocumento
    );
    return of(resultados); // Devuelve un Observable con los resultados
  }
}
