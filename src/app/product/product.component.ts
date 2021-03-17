import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductServiceService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertMessages: AlertifyService,
    private productService: ProductServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  title = 'Product List';
  filterText = '';
  ProductList: Product[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productService.getProducts(params["categoryId"]).subscribe((data) => {
        this.ProductList = data;
      });
    });
  }

  addToCart(product: Product) {
    this.alertMessages.success('added to cart: ' + product.name);
  }
}
