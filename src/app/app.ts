import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { ProductCard } from './components/product-card/product-card';
import { Footer } from "./components/footer/footer";


@Component({
  selector: 'app-root',
  imports: [Navbar, Home, ProductCard, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('group1_ecommerce_angular_app');
}
