import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/structure/header/header.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { HomeComponent } from './components/structure/home/home.component';
import { ListComponent } from './components/products/list/list.component';
import { NewComponent } from './components/products/new/new.component';
import { EditComponent } from './components/products/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
