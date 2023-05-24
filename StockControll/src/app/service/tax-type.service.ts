import { Injectable } from '@angular/core';
import { TaxType } from '../model/taxType.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxTypeService {

  productURL = "http://localhost:8085/tipoiva";

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<TaxType[]> {
    return this.httpClient.get<TaxType[]>(this.productURL);
  }

  public detalle(id: number): Observable<TaxType> {
    return this.httpClient.get<TaxType>(this.productURL + "/" + id);
  }

}
