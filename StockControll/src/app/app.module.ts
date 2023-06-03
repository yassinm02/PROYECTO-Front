import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { HomeComponent } from './components/structure/home/home.component';
import { ListComponent } from './components/products/list/list.component';
import { NewComponent } from './components/products/new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { InfoDialogComponent } from './components/dialogs/info-dialog/info-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { EditDialogComponent } from './components/dialogs/edit-dialog/edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvidersListComponent } from './components/providers/providers-list/providers-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarcodeDialogComponent } from './components/dialogs/barcode-dialog/barcode-dialog.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { InventarislistComponent } from './components/inventario/inventarislist/inventarislist.component';
import { CreateinventaryComponent } from './components/dialogs/createinventary/createinventary.component';
import { InventarioproductoComponent } from './components/inventario/inventarioproducto/inventarioproducto.component';
import { InformesComponent } from './components/providers/informes/informes.component';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { ProductdetailsComponent } from './components/products/productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    NewComponent,
    ConfirmationDialogComponent,
    InfoDialogComponent,
    EditDialogComponent,
    ProvidersListComponent,
    BarcodeDialogComponent,
    InventarislistComponent,
    CreateinventaryComponent,
    InventarioproductoComponent,
    InformesComponent,
    ProductdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatTableModule,
    ZXingScannerModule,
    CommonModule
  ],
  providers: [
    { provide: 'saveAs', useValue: saveAs }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
