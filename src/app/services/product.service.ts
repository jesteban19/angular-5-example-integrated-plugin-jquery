import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class ProductService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private productsUrl = 'api/products';
  constructor(private http: Http) { }
  public getProducts(): any {
    return this.http.get(this.productsUrl);
  }
}
