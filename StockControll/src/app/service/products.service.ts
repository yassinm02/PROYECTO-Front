import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { Page } from './page';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productURL = "http://192.168.0.17:8085/productos";

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productURL);
  }

  getProductPaginated(page: number, size: number): Observable<Page<Product>> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.httpClient.get<Page<Product>>(this.productURL+"/list", { params });
  }

  public deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + "/" + id);
  }


}
