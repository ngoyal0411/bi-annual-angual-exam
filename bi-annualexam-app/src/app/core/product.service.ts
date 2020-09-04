import { Injectable } from '@angular/core';
import { IProduct } from '../shared/interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[];
  constructor() {
    this.products = [
      {
        productId: 1,
        productName: 'Product1',
        productDesc: 'Product1 Desc',
        price: 1234,
        quantity: 1,
        isReturnable: true,
      },
      {
        productId: 1,
        productName: 'Product1',
        productDesc: 'Product1 Desc',
        price: 1234,
        quantity: 1,
        isReturnable: true,
      },
      {
        productId: 1,
        productName: 'Product1',
        productDesc: 'Product1 Desc',
        price: 1234,
        quantity: 1,
        isReturnable: true,
      },
    ];
  }

  getProducts(): IProduct[] {
    return this.products;
  }
}
