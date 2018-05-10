import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private productsUrl = 'api/products';
  constructor(private http: HttpClient) { }
  public getProducts(): any {
    return this.http.get(this.productsUrl).map((res: Response) => res);
  }
}
