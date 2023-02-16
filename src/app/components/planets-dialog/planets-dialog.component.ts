import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IResident } from "src/app/models";

@Component(({
    selector: 'planets-dialog',
    templateUrl: './planets-dialog.component.html',
    styleUrls: ['./planets-dialog.component.scss']
}))
export class PlanetsDialogComponent {
    displayedColumns: string[] = ['name', 'height', 'birth_year'];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: IResident[]
    ) { }

    // Check if the value from table is numeric
    isNumber(arg: number): boolean {
        return isNaN(arg);
    }
}