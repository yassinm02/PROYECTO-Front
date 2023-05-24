import { Component } from '@angular/core';
import { Provider } from 'src/app/model/provider.model';
import { ProviderService } from 'src/app/service/provider.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';

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

  deleteprovider( id: number){
    this.dialog
    .open(ConfirmationDialogComponent, {
      data: "Seguro que deseja borrar el proveedor con id: " + id + "?",
    })
    .afterClosed()
    .subscribe((confirmado: Boolean) => {
      if (confirmado) {
        this.providerService.deleteByid(id).subscribe(() => {
        });
        window.location.reload();
      }
    });
  }
  
}
