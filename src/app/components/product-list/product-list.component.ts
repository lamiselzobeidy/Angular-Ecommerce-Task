import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  p: number = 1;
  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  deleteProduct(product: Product){
    this.productService
    .deleteProduct(product)
    .subscribe(
      () => (this.products = this.products.filter((t) => t.id !== product.id))
      );
  }

  addProduct(product: Product) {
    this.productService.addProduct(product).subscribe((product) => this.products.push(product));
  }

}
