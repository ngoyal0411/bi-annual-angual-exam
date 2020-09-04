import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared/shared.module';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, CartComponent, ProductDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
