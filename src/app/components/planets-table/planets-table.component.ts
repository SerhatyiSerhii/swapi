import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { finalize } from "rxjs";
import { IPlanet, IResident } from "src/app/models";
import { PlanetService } from "src/app/services/planet.service";
import { PlanetsDialogComponent } from "../planets-dialog/planets-dialog.component";

@Component({
    selector: 'planets-table',
    templateUrl: './planets-table.component.html',
    styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableCOmponent implements OnChanges {
    @Input() selectedPlanet: IPlanet | undefined;
    @Output() showSpinner: EventEmitter<boolean> = new EventEmitter<boolean>();
    displayedColumns: string[] = ['name', 'diameter', 'climate', 'population'];
    residents: IResident[] = [];
    showError: boolean = false;
    loadCompleted: boolean = false;

    constructor(
        private dialog: MatDialog,
        private api: PlanetService
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['selectedPlanet']) {
            // If new planet was selected - show spinner and remove error messages
            this.showSpinner.emit(true);
            this.showError = false;
            this.loadCompleted = false;

            if (this.selectedPlanet) {
                this.api.getResidents(this.selectedPlanet.residents).pipe(
                    finalize(() => {
                        this.showSpinner.emit(false);
                        this.loadCompleted = true;
                    })
                ).subscribe(
                    {
                        next: (res) => {
                            this.residents = res.sort((a, b) => a.name.localeCompare(b.name));
                        },
                        error: () => {
                            this.showError = true;
                        }
                    }
                );
            }
        }
    }

    openDialog(): void {
        if (this.loadCompleted) {
            this.dialog.open(PlanetsDialogComponent, { data: this.residents, width: '80%' });
        }        
    }

    // Check if the value from table is numeric
    isNumber(arg: number): boolean {
        return isNaN(arg);
    }
}