import { Component, OnInit } from '@angular/core';
import { SingleProduct } from "./products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: SingleProduct[] = [
    new SingleProduct(0,'Test Prod',100,'https://cdn.pixabay.com/photo/2012/04/16/11/18/dog-35553_960_720.png','This is just a test.')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
