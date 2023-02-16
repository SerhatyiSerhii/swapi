import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MatSelect, MatSelectChange } from "@angular/material/select";
import { fromEvent } from "rxjs";
import { IPlanet } from "src/app/models";
@Component({
    selector: 'planets-dropdown',
    templateUrl: './planets-dropdown.component.html',
    styleUrls: ['./planets-dropdown.component.scss']
})
export class PlanetsDropdownComponent {
    @Input() planets: IPlanet[];
    @Input() loadNext: boolean = false;
    @Output() selectedPlanet: EventEmitter<string> = new EventEmitter<string>();
    @Output() loadNextPlanet: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild('scrollPanel') scrollPanel: MatSelect;

    selectPlanet(event: MatSelectChange): void {
        // Pass the name of the selected planet to parent
        this.selectedPlanet.emit(event.value);
    }

    loadMorePlanets(): void {
        const planetsPanel = this.scrollPanel.panel.nativeElement;

        fromEvent(planetsPanel, 'scroll').subscribe(() => {
            if (
                planetsPanel.scrollTop === planetsPanel.scrollHeight - planetsPanel.clientHeight &&
                this.loadNext
            ) {
                this.loadNextPlanet.emit();
            }
        });
    }
}