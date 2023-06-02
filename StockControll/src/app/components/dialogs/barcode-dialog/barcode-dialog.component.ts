import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-barcode-dialog',
  templateUrl: './barcode-dialog.component.html',
  styleUrls: ['./barcode-dialog.component.scss']
})
export class BarcodeDialogComponent {
  
  apiURL = 'https://barcode-api.example.com/generate';

  constructor(
    public dialogRef: MatDialogRef<BarcodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }


  closeDialog(): void {
    this.dialogRef.close(false);
  }

  

}
