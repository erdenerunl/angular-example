import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Product List";
  filterText = "";
  ProductList: Product[] = [
    {id:1, price:2500, name: "MacBook", categoryId:1, desc: "It is a macbook."},
    {id:2, price:2500, name: "Laptop", categoryId:2, desc: "It is a macbook."},
    {id:3, price:2500, name: "Fridge", categoryId:3, desc: "It is a macbook."},
    {id:4, price:2500, name: "Automobile", categoryId:4, desc: "It is a macbook."},
    {id:5, price:2500, name: "MacBook", categoryId:5, desc: "It is a macbook."},
    {id:6, price:2500, name: "MacBook", categoryId:6, desc: "It is a macbook."},

  ];
  ngOnInit(): void {
  }

}
