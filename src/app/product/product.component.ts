import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from './product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductServiceService]
})
export class ProductComponent implements OnInit {

  constructor(private alertMessages: AlertifyService, private productService: ProductServiceService) { }

  title = "Product List";
  filterText = "";
  ProductList: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.ProductList = data;
    })
  }

  addToCart(product: Product){
    this.alertMessages.success('added to cart: ' + product.name)
  }

}
