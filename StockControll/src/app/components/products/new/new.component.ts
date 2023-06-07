import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/model/product.model';
import { Provider } from 'src/app/model/provider.model';
import { TaxType } from 'src/app/model/taxType.model';
import { ProductsService } from 'src/app/service/products.service';
import { ProviderService } from 'src/app/service/provider.service';
import { TaxTypeService } from 'src/app/service/tax-type.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  productForm!: FormGroup;
  submitted = false;
  tiposIva: TaxType[] = [];
  proveedores: Provider[] = [];

  constructor(
    private dialogRef: MatDialogRef<NewComponent>,
    private productService: ProductsService,
    private tipoIvaService: TaxTypeService,
    private proveedorService: ProviderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      marca: [''],
      cantidad: ['', [Validators.required, Validators.min(0)]],
      estado: ['', Validators.required],
      precioBase: ['', [Validators.required, Validators.min(0)]],
      tipoIva: ['', Validators.required],
      proveedor: ['', Validators.required],
      codBarras: ['', [Validators.required, Validators.minLength(8)]]
    });

    this.tipoIvaService.get().subscribe(
      (tiposIva) => {
        this.tiposIva = tiposIva;
      },
      (error) => {
        console.error('Error al obtener los tipos de IVA:', error);
      }
    );

    this.proveedorService.get().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
      },
      (error) => {
        console.error('Error al obtener los proveedores:', error);
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.productForm.invalid) {
      return;
    }

    const product: Product = this.productForm.value;
    this.productService.createProduct(product).subscribe(
      () => {
      }
    );
    this.dialogRef.close(true);

  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  get f() {
    return this.productForm.controls;
  }
}
