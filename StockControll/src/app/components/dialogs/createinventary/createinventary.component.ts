import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createinventary',
  templateUrl: './createinventary.component.html',
  styleUrls: ['./createinventary.component.scss']
})
export class CreateinventaryComponent {

  nombreInventario: string;

  constructor(
    public dialogRef: MatDialogRef<CreateinventaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  guardar(): void {
    if (this.nombreInventario) {
      this.dialogRef.close(this.nombreInventario);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}
