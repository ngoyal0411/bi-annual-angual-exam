import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/interfaces/IProduct';
import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private service: ProductService) {}

  products: IProduct[];
  displayedColumns = ['Name', 'Desc', 'Price', 'Quantity', 'Returnable'];
  ngOnInit(): void {
    this.products = this.service.getProducts();
  }
}
