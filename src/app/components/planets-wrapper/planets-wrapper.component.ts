import { Component, OnInit } from "@angular/core";
import { IPlanetItem } from "src/app/models/planet-item.interface";
import { IPlanetTable } from "src/app/models/planet-table.interface";
import { PlanetService } from "src/app/services/planet.service";

@Component({
    selector: 'planets-wrapper',
    templateUrl: './planets-wrapper.component.html',
    styleUrls: ['./planets-wrapper.component.scss']
})
export class PlanetsWrapperComponent implements OnInit {
    planets: IPlanetItem[] = [];
    selectedPlanet: IPlanetTable[] = [];
    showSpinner: boolean = true;
    showError: boolean = false;

    constructor(
        private planetService: PlanetService
    ) { }

    ngOnInit(): void {
        this.planetService.getPlanets().subscribe(
            {
                next: (data: IPlanetItem[]) => {
                    this.planets = data;
                    this.showSpinner = false;
                },
                error: () => {
                    this.showSpinner = false;
                    this.showError = true;
                }
            }
        );
    }

    showSelectedPlanet(planet: string): void {
        const foundPlanet = this.planets.find(item => item.name === planet);

        this.selectedPlanet = [
            {
                name: foundPlanet!.name,
                diameter: foundPlanet!.diameter,
                climate: foundPlanet!.climate,
                population: foundPlanet!.population,
                residents: foundPlanet!.residents
            }
        ];
    }
}