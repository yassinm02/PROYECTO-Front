import { InventarioService } from 'src/app/service/inventario.service';
import { Component, OnInit } from '@angular/core';
import { InventarioModel } from 'src/app/model/inventario.model';
import { InventarioproductosModel } from 'src/app/model/inventarioproductos.model';
import { InventarioProductosService } from 'src/app/service/inventario-productos.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateinventaryComponent } from '../../dialogs/createinventary/createinventary.component';
import { Product } from 'src/app/model/product.model';
import { InfoDialogComponent } from '../../dialogs/info-dialog/info-dialog.component';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-inventarioproducto',
  templateUrl: './inventarioproducto.component.html',
  styleUrls: ['./inventarioproducto.component.scss'],
})
export class InventarioproductoComponent implements OnInit {
  inventarios: InventarioModel[] = [];
  inventarioSeleccionado: InventarioModel;
  inventarioProductos: InventarioproductosModel[] = [];
  paginaActual = 0;
  totalPages = 0;
  pageSize = 10;
  product: Product;
  cargandoActualizacion: boolean = false;

  constructor(
    private inventarioService: InventarioService,
    private inventarioProductoService: InventarioProductosService,
    public dialog: MatDialog,
    private productService: ProductsService
  ) {}

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

  cargarPagina(page: number): void {
    this.cargandoActualizacion = true;
    this.paginaActual = page;
    
    if (this.inventarioSeleccionado) {
      this.inventarioProductoService
        .obtenerProductosPorInventario(
          this.inventarioSeleccionado.id,
          this.paginaActual,
          this.pageSize
        )
        .subscribe(
          (response: any) => {
            this.inventarioProductos = response;
            this.totalPages = response.totalPages;
            this.cargandoActualizacion = false; 
          },
          (error) => {
            console.log('Error al cargar la página', error);
          }
        );
    } else {
      this.inventarioProductos = [];
      this.totalPages = 0;
    }
  }

  actualizarRevisadoL(item: InventarioproductosModel): void {
    this.inventarioProductoService
      .actualizarRevisado(item.inventario.id, item.producto.id, item.revisado)
      .subscribe(
        
      );
  }

  abrirDialogoCrearInventario(): void {
    const dialogRef = this.dialog.open(CreateinventaryComponent, {
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((nombreInventario) => {
      if (nombreInventario) {
        const nuevoInventario: InventarioModel = {
          id: 0,
          nombre: nombreInventario,
          fechaCreacion: new Date(),
        };

        this.inventarioService.guardar(nuevoInventario).subscribe(
          (inventarioGuardado) => {
            console.log('Inventario guardado:', inventarioGuardado);
          },
          (error) => {
            console.error('Error al guardar el inventario:', error);
          }
        );
      }
    });
  }

  opneInfoDialog(id: number): void {
    this.productService.getProductById(id).subscribe((data) => {
      this.dialog.open(InfoDialogComponent, {
        data: data,
      });
    });
  }

  actualizarCantidad(id: number, cant: number): void {
    this.productService.getProductById(id).subscribe((data) => {
      data.cantidad = cant;
      this.productService.editProduct(id, data).subscribe(() => {
        console.log('Cantidad actualizada');
      });
    });
  }
}
