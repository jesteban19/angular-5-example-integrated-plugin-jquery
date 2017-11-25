import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: {};
  constructor(private _prodService: ProductService) { }
  public getProducts(): void {
    this.products = this._prodService.getProducts()
      .subscribe(data => {
        this.products = data.json();
      });
  }
  ngOnInit(): void {
    this.getProducts();
  }

}
