import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventarioproductosModel } from '../model/inventarioproductos.model';
import { InventarioModel } from '../model/inventario.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  
  private baseUrl = 'http://192.168.0.17:8085/inventarios';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<InventarioModel[]> {
    return this.http.get<InventarioModel[]>(this.baseUrl);
  }

  obtenerPorId(id: number): Observable<InventarioModel> {
    const url = this.baseUrl + '/' + id;
    return this.http.get<InventarioModel>(url);
  }

  guardar(inventario: InventarioModel): Observable<InventarioModel> {
    return this.http.post<InventarioModel>(this.baseUrl, inventario);
  }

  eliminar(id: number): Observable<void> {
    const url = this.baseUrl + '/' + id;
    return this.http.delete<void>(url);
  }
  
}
