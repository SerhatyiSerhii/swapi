import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { PlanetsDialogComponent } from './components/planets-dialog/planets-dialog.component';
import { PlanetsDropdownComponent } from './components/planets-dropdown/planets-dropdown.component';
import { PlanetsTableCOmponent } from './components/planets-table.component/planets-table.component';
import { PlanetsWrapperComponent } from './components/planets-wrapper/planets-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsDialogComponent,
    PlanetsDropdownComponent,
    PlanetsTableCOmponent,
    PlanetsWrapperComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
