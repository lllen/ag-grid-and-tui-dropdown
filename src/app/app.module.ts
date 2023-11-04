import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {AgGridModule} from "ag-grid-angular";
import {TuiButtonModule, TuiDataListModule, TuiHostedDropdownModule, TuiRootModule} from "@taiga-ui/core";
import {TuiPortalModule} from "@taiga-ui/cdk";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    TuiRootModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    TuiPortalModule,
    TuiDataListModule,
      BrowserAnimationsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
