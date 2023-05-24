import { Provider } from './../model/provider.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  proveedorURL = "http://localhost:8085/proveedor";

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(this.proveedorURL);
  }

  public detalle(id: number): Observable<Provider> {
    return this.httpClient.get<Provider>(this.proveedorURL + "/" + id);
  }

  deleteByid(id: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<any>(this.proveedorURL+"/"+id);
  }

}
