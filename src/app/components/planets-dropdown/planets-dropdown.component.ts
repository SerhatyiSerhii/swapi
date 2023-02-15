import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { IPlanetItem } from "src/app/models/planet-item.interface";

@Component({
    selector: 'planets-dropdown',
    templateUrl: './planets-dropdown.component.html',
    styleUrls: ['./planets-dropdown.component.scss']
})
export class PlanetsDropdownComponent {
    @Input() planets: IPlanetItem[] = [];
    @Output() selectedPlanet: EventEmitter<string> = new EventEmitter<string>();

    selectPlanet(event: MatSelectChange): void {
        this.selectedPlanet.emit(event.value);
    }
}