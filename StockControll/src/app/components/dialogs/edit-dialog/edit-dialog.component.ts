import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  productForm: FormGroup;
  submitted = false;
  editedProduct: Product;
  providers: Provider[];
  taxTypes: TaxType[];

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private taxTypeService: TaxTypeService,
    private providerService: ProviderService
  ) {
    this.editedProduct = { ...product };

    this.productForm = this.formBuilder.group({
      name: [product.name, Validators.required],
      descripcion: [product.descripcion, Validators.required],
      marca: [product.marca],
      cantidad: [product.cantidad, [Validators.required, Validators.min(0)]],
      estado: [product.estado, Validators.required],
      precioBase: [product.precioBase, [Validators.required, Validators.min(0)]],
      tipoIva: [product.tipoIva, Validators.required],
      proveedor: [product.proveedor, Validators.required],
      codBarras: [product.codBarras, [Validators.required, Validators.minLength(8)]]
    });
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
    this.taxTypeService.get().subscribe(
      (taxTypes: TaxType[]) => {
        this.taxTypes = taxTypes;
      },
      (error) => {
        console.error('Error loading tax types:', error);
      }
    );
  }

  saveProduct(): void {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    const product: Product = this.productForm.value;
    product.fechaCreacion = this.editedProduct.fechaCreacion;

    this.productService.editProduct(this.editedProduct.id, product)
      .subscribe(() => {
      });
      this.dialogRef.close();
  }

  get f() {
    return this.productForm.controls;
  }

  compareTaxTypes(taxType1: TaxType, taxType2: TaxType): boolean {
    return taxType1 && taxType2 ? taxType1.id === taxType2.id : taxType1 === taxType2;
  }
  
  compareProviders(provider1: Provider, provider2: Provider): boolean {
    return provider1 && provider2 ? provider1.id === provider2.id : provider1 === provider2;
  }
  
}
