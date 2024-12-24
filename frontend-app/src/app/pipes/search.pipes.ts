import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(
    items: any[],
    tipoDocumento: string,
    numeroDocumento: string
  ): any[] {
    if (!items || (tipoDocumento === '' && numeroDocumento === '')) {
      return items; // Si no hay filtro, devuelve todos los items
    }

    return items.filter((item) => {
      const tipoMatch = item.tipoDocumento
        .toLowerCase()
        .includes(tipoDocumento.toLowerCase());
      const numeroMatch = item.numeroDocumento
        .toLowerCase()
        .includes(numeroDocumento.toLowerCase());

      // Ambos filtros deben coincidir
      return tipoMatch && numeroMatch;
    });
  }
}
