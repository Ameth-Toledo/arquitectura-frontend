import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor (private router : Router) {}

  sendAsignature(event : Event) {
    event.preventDefault();
    this.router.navigate(['/asignatures']);
  }

  sendHome(event : Event) {
    event.preventDefault();
    this.router.navigate([''])
  }
}
