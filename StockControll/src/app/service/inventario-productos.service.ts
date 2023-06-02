import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventarioproductosModel } from '../model/inventarioproductos.model';
import { Page } from './page';

@Injectable({
  providedIn: 'root'
})
export class InventarioProductosService {

  private baseUrl = 'http://192.168.0.17:8085/inventario-producto';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<InventarioproductosModel[]> {
    return this.http.get<InventarioproductosModel[]>(this.baseUrl);
  }

  obtenerPorId(idInventario: number, idProducto: number): Observable<InventarioproductosModel> {
    const url = this.baseUrl + '/' + idInventario + '/' + idProducto;
    return this.http.get<InventarioproductosModel>(url);
  }

  guardar(inventarioProducto: InventarioproductosModel): Observable<InventarioproductosModel> {
    return this.http.post<InventarioproductosModel>(this.baseUrl, inventarioProducto);
  }

  eliminar(idInventario: number, idProducto: number): Observable<void> {
    const url = this.baseUrl + '/' + idInventario + '/' + idProducto;
    return this.http.delete<void>(url);
  }

  actualizarRevisado(idInventario: number, idProducto: number, revisado: boolean) {
    const url = this.baseUrl+"/actualizar-revisado/"+idInventario+"/"+idProducto+"/"+revisado;
    return this.http.put<InventarioproductosModel>(url, null);
  }
  
  obtenerTodosListaPaginacion(page: number, size: number): Observable<Page<InventarioproductosModel>> {
    const url = this.baseUrl + "/lista";
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Page<InventarioproductosModel>>(url, { params });
  }

  obtenerProductosPorInventario(idInventario: number, page: number, size: number): Observable<InventarioproductosModel[]> {
    const url = this.baseUrl + "/lista/"+ idInventario;
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<InventarioproductosModel[]>(url, { params });
  }


}
