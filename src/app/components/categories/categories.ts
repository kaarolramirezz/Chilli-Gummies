import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
  standalone: true
})
export class Categories {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = '';
  @Output() selectCategory = new EventEmitter<string>();

  categoryEmojis: Record<string, string> = {
    All: "🍬",
    Bears: "🐻",
    Sour: "😝",
    Rings: "🍑",
    Novelty: "❤️",
    "Mix & Bags": "🎉",
    Fruity: "🍍"
  };
}

