import { Component } from '@angular/core';
import { InventarioModel } from 'src/app/model/inventario.model';
import { InventarioService } from 'src/app/service/inventario.service';
import { CreateinventaryComponent } from '../../dialogs/createinventary/createinventary.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inventarislist',
  templateUrl: './inventarislist.component.html',
  styleUrls: ['./inventarislist.component.scss']
})
export class InventarislistComponent {


  inventarios: InventarioModel[] = [];

  constructor(private inventarioService: InventarioService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerInventarios();
  }

  obtenerInventarios(): void {
    this.inventarioService.obtenerTodos().subscribe(
      inventarios => {
        this.inventarios = inventarios;
      },
      error => {
        console.error('Error al obtener los inventarios', error);
      }
    );
  }

  abrirDialogoCrearInventario(): void {
    const dialogRef = this.dialog.open(CreateinventaryComponent, {
      width: '300px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(nombreInventario => {
      if (nombreInventario) {
        const nuevoInventario: InventarioModel = {
          id: 0,
          nombre: nombreInventario,
          fechaCreacion: new Date
        };

        this.inventarioService.guardar(nuevoInventario).subscribe(
          inventarioGuardado => {
            console.log('Inventario guardado:', inventarioGuardado);
          },
          error => {
            console.error('Error al guardar el inventario:', error);
          }
        );
      }
    });
  }

  AbrirInventario(){
    
  }

}
