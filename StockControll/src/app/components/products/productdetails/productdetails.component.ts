import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.productoService.getProductByBarcode(id).subscribe(
      producto => this.product = producto
    );
  }

  volver(): void {
    window.history.back();
  }

  EditProduct(id:number | undefined): void{
    if (id !== undefined) {
      this.router.navigateByUrl('edit/'+id);
    }
  }


}
