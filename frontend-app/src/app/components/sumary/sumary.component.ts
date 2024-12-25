import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sumary',
  standalone: true,
  imports: [],
  templateUrl: './sumary.component.html',
  styleUrl: './sumary.component.css',
})
export class SumaryComponent implements OnInit {
  documentType: string = '';
  documentNumber: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.documentType = params['documentType'];
      this.documentNumber = params['documentNumber'];
    });
  }

  onBack() {
    this.router.navigate(['/']);
  }
}
