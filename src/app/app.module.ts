import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/partials/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { AddProductComponent } from './components/product-list/add-product/add-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductListComponent,
    ProductItemComponent,
    AddProductComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    MatChipsModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
