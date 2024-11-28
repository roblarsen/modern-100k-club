import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Angular Data Grid Component
import { AgGridAngular } from '@ag-grid-community/angular';
// Default Row Model
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// Column Definition Type Interface & Module Registry
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';

// Register the RowModel Module
ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular,RouterOutlet], // Add Angular Data Grid Component
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})

export class AppComponent {  
  title = 'comics';
  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];
}
