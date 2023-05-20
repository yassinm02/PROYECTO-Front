import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/service/products.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: Product[] = [];
  actualPage: number = 0;
  totalPages:  number[] = [];

  constructor(private productService: ProductsService) {}

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

  }

  editProduct(id:number) : void{

  }




}
