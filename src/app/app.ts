import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterModule], // add RouterModule here
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet> <!-- required for routed components -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('group1_ecommerce_angular_app');
}
