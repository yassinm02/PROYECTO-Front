import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/structure/home/home.component';
import { ListComponent } from './components/products/list/list.component';
import { ProvidersListComponent } from './components/providers/providers-list/providers-list.component';
import { InventarioproductoComponent } from './components/inventario/inventarioproducto/inventarioproducto.component';
import { InformesComponent } from './components/providers/informes/informes.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "productos",
    component: ListComponent
  },
  {
    path: "proveedores",
    component: ProvidersListComponent
  },
  {
    path: "inventario",
    component: InventarioproductoComponent
  },
  {
    path: "informes",
    component: InformesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
