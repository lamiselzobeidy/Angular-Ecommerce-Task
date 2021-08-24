import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter()
  name: string;
  description: string;
  price: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() 
  {
    if(!this.name){
      alert("please add a name");
      return;
    }
    const newProduct = {
      name: this.name,
      description: this.description,
      price: this.price,
      image: "link",
    }

    this.onAddProduct.emit(newProduct);

    this.name = "";
    this.description = "";
    this.price = "";
  }

}
