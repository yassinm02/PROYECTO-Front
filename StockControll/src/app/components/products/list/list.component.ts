import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/service/products.service';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { InfoDialogComponent } from '../../dialogs/info-dialog/info-dialog.component';
import { EditDialogComponent } from '../../dialogs/edit-dialog/edit-dialog.component';
import { NewComponent } from '../new/new.component';
import { concatMap, finalize, of } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  actualPage: number = 0;
  totalPages:  number[] = [];
  searchTerm: string = '';
  pageSize: number = 10;


  constructor(private productService: ProductsService,
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProductPaginated(this.actualPage, this.pageSize, this.searchTerm)
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
        data: "¿Seguro que desea borrar el producto con id: " + id + "?",
      })
      .afterClosed()
      .pipe(
        concatMap((confirmado: boolean) => {
          if (confirmado) {
            return this.productService.deleteById(id);
          } else {
            return of();
          }
        }),
        finalize(() => {
          this.getProducts();
        })
      )
      .subscribe(() => {
      });
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: product
    });
  
    dialogRef.afterClosed().subscribe(() => {
      this.getProducts();
      window.location.reload();
    });
  }
  
  changePageSize(newPageSize: number): void {
    this.pageSize = newPageSize;
    this.changePage(0);
  }

  opneInfoDialog(product: Product): void {
    this.dialog.open(InfoDialogComponent, {
      data: product
    });
  }

  searchProducts(term: string): void {
    this.searchTerm = term;
    this.getProducts();
  }
  handleSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchProducts(searchTerm);
  }

  addProduct(){
    this.dialog.open(NewComponent, {}).afterClosed().subscribe((result:boolean) => {

      if(result) {
        alert("Producto creado!");
      }

    });
  }

}
