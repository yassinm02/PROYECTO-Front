import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../model/product.model';
import { Observable, catchError, throwError } from 'rxjs';
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

  getProductPaginated(page: number, size: number, searchTerm: string): Observable<Page<Product>> {
    const params = {
      page: page.toString(),
      size: size.toString(),
      searchTerm: searchTerm
    };

    return this.httpClient.get<Page<Product>>(this.productURL+"/list", { params });
  }

  public deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productURL + "/" + id);
  }

  public editProduct(id: number, producto: Product): Observable<any> {
    const url = `${this.productURL}/${id}`;
    return this.httpClient.patch(this.productURL+"/edit/"+id, producto);
  }
  

  createProduct(producto: Product): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<string>(`${this.productURL}/create`, producto, { headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'Error al crear el producto';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  public getProductByBarcode(barcode: string): Observable<Product> {
    const url = `${this.productURL}/barcode/${barcode}`;
    return this.httpClient.get<Product>(url);
  }
  
  public getProductById(id: number): Observable<Product> {
    const url = `${this.productURL}/${id}`;
    return this.httpClient.get<Product>(url);
  }

}
