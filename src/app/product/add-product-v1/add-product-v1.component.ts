import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product-v1',
  templateUrl: './add-product-v1.component.html',
  styleUrls: ['./add-product-v1.component.css']
})
export class AddProductV1Component implements OnInit {

  constructor(private categoryService: CategoryService) { }
  model: Product = new Product();
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })

    // add(form: NgForm){

    // }
  }

}
