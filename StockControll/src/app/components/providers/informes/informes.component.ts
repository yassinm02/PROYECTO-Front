import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { InventarioModel } from 'src/app/model/inventario.model';
import { InventarioproductosModel } from 'src/app/model/inventarioproductos.model';
import { InventarioProductosService } from 'src/app/service/inventario-productos.service';
import { InventarioService } from 'src/app/service/inventario.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {

  inventarios: InventarioModel[] = [];
  inventarioSeleccionado: InventarioModel;
  inventarioProductos: InventarioproductosModel[] = [];

  constructor(private http: HttpClient,
    private inventarioService: InventarioService) {}


  downloadPdfProducto(): void {
    this.http.get('http://192.168.0.17:8085/productos/pdf', { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'productos.pdf');
      });
  }

  downloadPdfProveedor(): void {
    this.http.get('http://192.168.0.17:8085/proveedor/pdf', { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, 'proveedores.pdf');
      });
  }
  
  downloadPdfInventario(): void {
    if (!this.inventarioSeleccionado || !this.inventarioSeleccionado.id) {
      console.log('No se ha seleccionado ningún inventario.');
      return;
    }
  
    this.http.get(`http://192.168.0.17:8085/inventario-producto/pdf/${this.inventarioSeleccionado.id}`, { responseType: 'blob' })
      .subscribe((response: Blob) => {
        saveAs(response, "inventario_" + this.inventarioSeleccionado.nombre+ ".pdf");
      });
  }
  

  ngOnInit(): void {
    this.obtenerInventarios();
  }

  obtenerInventarios(): void {
    this.inventarioService.obtenerTodos().subscribe(
      (response: InventarioModel[]) => {
        this.inventarios = response;
      },
      (error) => {
        console.error('Error al obtener los inventarios:', error);
      }
    );
  }

}


