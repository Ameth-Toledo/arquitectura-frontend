import { Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { AsignaturesComponent } from './ui/pages/asignatures/asignatures.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'asignatures', component: AsignaturesComponent }
];
