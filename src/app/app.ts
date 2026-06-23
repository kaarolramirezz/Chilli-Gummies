import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ShoppingCartSheet } from './components/shopping-cart-sheet/shopping-cart-sheet';
import { Welcome } from './components/welcome/welcome';
import { Categories } from './components/categories/categories';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ShoppingCartSheet, Welcome, Categories, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
  
})
export class App {
  searchQuery: string = '';
  onSearchChange() {
    console.log('Buscando gomitas con:', this.searchQuery);
  }
  

  cartItems: any[] = []; 
  isCartOpen: boolean = false;

  handleUpdateQuantity(event: any) {}
  handleRemoveItem(event: any) {}
}
