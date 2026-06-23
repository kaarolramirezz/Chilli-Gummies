import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-sheet',
  imports: [],
  templateUrl: './shopping-cart-sheet.html',
  styleUrl: './shopping-cart-sheet.css',
  standalone: true
})
export class ShoppingCartSheet {
  @Input() items: any[] = [];
  @Input() isOpen: boolean = false;

  @Output() updateQuantity = new EventEmitter<any>();
  @Output() removeItem = new EventEmitter<any>();
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleCart() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
