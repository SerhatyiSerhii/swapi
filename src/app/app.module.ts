import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { PlanetsDialogComponent } from './components/planets-dialog/planets-dialog.component';
import { PlanetsDropdownComponent } from './components/planets-dropdown/planets-dropdown.component';
import { PlanetsTableCOmponent } from './components/planets-table/planets-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsDialogComponent,
    PlanetsDropdownComponent,
    PlanetsTableCOmponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
