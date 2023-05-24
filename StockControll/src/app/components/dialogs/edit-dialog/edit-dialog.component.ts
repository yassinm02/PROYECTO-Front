import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/product.model';
import { Provider } from 'src/app/model/provider.model';
import { TaxType } from 'src/app/model/taxType.model';
import { ProductsService } from 'src/app/service/products.service';
import { ProviderService } from 'src/app/service/provider.service';
import { TaxTypeService } from 'src/app/service/tax-type.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  editedProduct: Product;
  providers: Provider[];
  taxTypes: TaxType[];

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private productService: ProductsService,
    private taxService: TaxTypeService,
    private providerService: ProviderService
  ) {

    this.editedProduct = { ...product };
  }

  ngOnInit(): void {
    this.loadProviders();
    this.loadTaxTypes();
  }

  loadProviders(): void {
    this.providerService.get().subscribe(
      (providers: Provider[]) => {
        this.providers = providers;
      },
      (error) => {
        console.error('Error loading providers:', error);
      }
    );
  }

  loadTaxTypes(): void {
    this.taxService.get().subscribe(
      (taxTypes: TaxType[]) => {
        this.taxTypes = taxTypes;
      },
      (error) => {
        console.error('Error loading tax types:', error);
      }
    );
  }

  saveProduct(): void {
    if (this.editedProduct.name && this.editedProduct.descripcion && this.editedProduct.proveedor && this.editedProduct.tipoIva) {
      Object.assign(this.product, this.editedProduct);
      this.dialogRef.close(this.product); // Close the dialog and pass the updated product
    }
  }
}
