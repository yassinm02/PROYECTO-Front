import { Component } from '@angular/core';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/service/provider.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { EDITPROVIDERComponent } from '../editprovider/editprovider.component';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss']
})
export class ProvidersListComponent {

  providers: Provider[] = [];

  constructor(private providerService: ProviderService,
    private breakpointObserver: BreakpointObserver,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders(): void {
    this.providerService.get()
      .subscribe(providers => {
        this.providers = providers;
      });
  }

  getGridListCols(): number {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      return 1;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
      return 2;
    } else {
      return 4;
    }
  }

  editProvider(proveedor : Provider){
    this.dialog
    .open(EDITPROVIDERComponent, {
      data: proveedor
    })
  }

  deleteprovider(id: number): void {
  this.dialog
    .open(ConfirmationDialogComponent, {
      data: "¿Seguro que desea borrar el proveedor con ID: " + id + "?",
    })
    .afterClosed()
    .subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.providerService.deleteByid(id).subscribe({
        
        });
      }
    });
    this.getProviders();

}
  
}
