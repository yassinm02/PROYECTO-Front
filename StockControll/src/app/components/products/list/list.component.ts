import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/service/products.service';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { InfoDialogComponent } from '../../dialogs/info-dialog/info-dialog.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  actualPage: number = 0;
  totalPages:  number[] = [];

  constructor(private productService: ProductsService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductPaginated(this.actualPage, 10)
          .subscribe(data => {
          this.products = data.content;
          this.totalPages = Array.from({length: data.totalPages}, (_, i) => i);
        });
  }

  changePage(htmlPage : number) : void{
    this.actualPage = htmlPage;
    this.getProducts();
  }

  deleteProduct(id: number): void {
    this.dialog
    .open(ConfirmationDialogComponent, {
      data: "Seguro que deseja borrar el producto con id: " + id + "?",
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.productService.deleteById(id).subscribe(() => {
        });
        window.location.reload();
      }
    });
  }

  editProduct(id:number) : void{

  }

  opneInfoDialog(product: Product): void {
    this.dialog.open(InfoDialogComponent, {
      data: product
    });
  }




}
