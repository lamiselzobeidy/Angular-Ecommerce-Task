import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../Product';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Tags {
  name: string;
}


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter()

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tags[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push({name: value});
    }

    event.chipInput!.clear();
  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  addNewProductForm = new FormGroup ({
  name : new FormControl('',Validators.required),
  description : new FormControl('',Validators.required),
  price : new FormControl(null,Validators.required),
  tags: new FormControl([],Validators.required),
})

constructor() { }

ngOnInit(): void {
}

onSubmit()
{
  if (!this.addNewProductForm.get('name')?.value) {
    return;
  }
  const tagsArray = [this.addNewProductForm.get('tags')?.value];
  console.log(this.addNewProductForm.get('tags')?.value)
  const newProduct = {
    name: this.addNewProductForm.get('name')?.value,
    description: this.addNewProductForm.get('description')?.value,
    price: this.addNewProductForm.get('price')?.value,
    tags: tagsArray
  }

  this.onAddProduct.emit(newProduct);
  this.addNewProductForm.reset();
  
}
}
