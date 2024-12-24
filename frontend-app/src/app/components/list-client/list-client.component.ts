import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.css',
})
export class ListClientComponent {
  @Input() resultados: any[] = [];

  constructor() {}
}
