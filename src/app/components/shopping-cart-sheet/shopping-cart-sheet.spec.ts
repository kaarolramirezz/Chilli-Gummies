import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSheet } from './shopping-cart-sheet';

describe('ShoppingCartSheet', () => {
  let component: ShoppingCartSheet;
  let fixture: ComponentFixture<ShoppingCartSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSheet],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartSheet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
