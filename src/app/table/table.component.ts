import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import {DropdownComponent} from "../dropdown/dropdown.component"; // Import ColDef from ag-grid-community

@Component({
  selector: 'app-table',
  template: `
    <tui-root>
      <ag-grid-angular
        style="width: 700px; height: 500px;"
        class="ag-theme-alpine"
        [rowData]="rowData"
        [columnDefs]="columnDefs">
      </ag-grid-angular>
    </tui-root>`,
})
export class TableComponent {
  columnDefs: ColDef[] = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Actions', cellRenderer: DropdownComponent },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];
}
