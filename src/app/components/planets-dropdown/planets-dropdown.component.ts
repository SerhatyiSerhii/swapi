import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { IPlanet } from "src/app/models/index";
@Component({
    selector: 'planets-dropdown',
    templateUrl: './planets-dropdown.component.html',
    styleUrls: ['./planets-dropdown.component.scss']
})
export class PlanetsDropdownComponent {
    @Input() planets: IPlanet[] = [];
    @Input() nextPlanetAddress: string = '';
    @Output() selectedPlanet: EventEmitter<string> = new EventEmitter<string>();
    @Output() loadNextPlanet: EventEmitter<void> = new EventEmitter<void>();

    planetsScrollList: Element | undefined;

    selectPlanet(event: MatSelectChange): void {
        // Pass the name of the selected planet to parent
        this.selectedPlanet.emit(event.value);
    }

    loadMorePlanets(): void {
        this.planetsScrollList = document.querySelector('.scroll-list')!;

        this.planetsScrollList.addEventListener('scroll', () => {
            // Ask parent to load new planet if there is next address and scrolled to the bottom
            if (
                this.planetsScrollList!.scrollTop === this.planetsScrollList!.scrollHeight - this.planetsScrollList!.clientHeight &&
                this.nextPlanetAddress
            ) {
                this.loadNextPlanet.emit();
            }
        });
    }
}