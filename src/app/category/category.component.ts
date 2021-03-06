import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Category List";
  categoryList : Category[] = [
    { id:1, name: "Laptop"},
    { id:2, name: "Automobile"},
    { id:3, name: "Other"},
  ]
  ngOnInit(): void {
  }

}
