import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IPlanetTable } from "src/app/models/planet-table.interface";
import { IResident } from "src/app/models/resident.interface";
import { PlanetService } from "src/app/services/planet.service";
import { PlanetsDialogComponent } from "../planets-dialog/planets-dialog.component";

@Component({
    selector: 'planets-table',
    templateUrl: './planets-table.component.html',
    styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableCOmponent implements OnChanges {
    @Input() selectedPlanet: IPlanetTable[] = [];
    displayedColumns: string[] = ['name', 'diameter', 'climate', 'population'];
    residents: IResident[] = [];
    showSpinner: boolean = true;
    showError: boolean = false;

    constructor(
        private dialog: MatDialog,
        private api: PlanetService
    ) { }

    openDialog(): void {
        this.dialog.open(PlanetsDialogComponent, { data: this.residents, width: '80%', });
    }

    ngOnChanges(): void {
        this.showSpinner = true;
        this.showError = false;

        if (this.selectedPlanet.length) {
            this.api.getResidents(this.selectedPlanet[0].residents).subscribe(
                {
                    next: (res) => {
                        this.residents = res;
                        this.showSpinner = false;
                    },
                    error: () => {
                        this.showSpinner = false;
                        this.showError = true;
                    }
                }
            );
        }
    }
}