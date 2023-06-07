import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-editprovider',
  templateUrl: './editprovider.component.html',
  styleUrls: ['./editprovider.component.scss'],
})
export class EDITPROVIDERComponent implements OnInit{

  provider: Provider;

  constructor(
    public dialogRef: MatDialogRef<EDITPROVIDERComponent>,
    @Inject(MAT_DIALOG_DATA) public proveedor: Provider,
    private providerService: ProviderService
  ) {
    this.provider = proveedor;
  }


  ngOnInit(): void {
    
  }


  saveProvider(): void {
    console.log('Guardar proveedor:', this.provider);
    this.providerService.editProveedor(this.provider).subscribe(
      () => {
      }
    );
    this.dialogRef.close();

  }
  
  closeDialog(): void {
    this.dialogRef.close();

  }


}
