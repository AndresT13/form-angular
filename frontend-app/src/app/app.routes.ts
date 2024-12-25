import { Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { SumaryComponent } from './components/sumary/sumary.component';

export const routes: Routes = [
  { path: '', component: ClientFormComponent },
  { path: 'summary', component: SumaryComponent },
];
