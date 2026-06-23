import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingCartSheet } from './components/shopping-cart-sheet/shopping-cart-sheet';
import { Welcome } from './components/welcome/welcome';
import { Categories } from './components/categories/categories';
import { Footer } from './components/footer/footer';
import { ProductCard } from './components/product-card/product-card';
import { Product } from './models/product.model';
import { PRODUCTS } from './data/products.mock';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ShoppingCartSheet, Welcome, Categories, Footer, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  searchQuery: string = '';
  selectedCategory: string = 'Todas';
  categoriesList: string[] = ['Todas', 'Ositos', 'Aros', 'Gusanitos', 'Tiras', 'Mangitos', 'Mix'];
  products: Product[] = PRODUCTS;
  cartItems: { product: Product, quantity: number }[] = []; 
  isCartOpen: boolean = false;

  get filteredProducts(): Product[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'Todas' || product.category === this.selectedCategory;
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }

  onSearchChange() {
    // console.log('Buscando gomitas con:', this.searchQuery);
  }

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartItems = [...this.cartItems];
  }

  handleUpdateQuantity(event: { product: Product, quantity: number }) {
    const item = this.cartItems.find(item => item.product.id === event.product.id);
    if (item) {
      item.quantity = event.quantity;
      if (item.quantity <= 0) {
        this.handleRemoveItem(event.product.id);
      } else {
        this.cartItems = [...this.cartItems];
      }
    }
  }

  handleRemoveItem(productId: string) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }
}

