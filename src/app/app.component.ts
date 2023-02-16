import { ChangeDetectorRef, Component } from '@angular/core';
import { finalize } from 'rxjs';
import { IPlanet, IPlanetsResponse } from './models/index';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  planets: IPlanet[] = [];
  selectedPlanet: IPlanet | undefined;
  isSpinnerShown: boolean = true;
  showError: boolean = false;
  nextPlanetAddress: string = '';

  constructor(
    private planetService: PlanetService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadPlanet();
  }

  showSelectedPlanet(planetName: string): void {
    // Find selected planet
    this.selectedPlanet = this.planets.find(item => item.name === planetName)!;
  }

  showSpinner(show: boolean): void {
    this.isSpinnerShown = show;
    this.cd.detectChanges();
  }

  loadPlanet(): void {
    // Show spinner on uploading of new planet
    this.isSpinnerShown = true;

    // Load planet
    this.planetService.getPlanet(this.nextPlanetAddress).pipe(
      finalize(() => {
        this.isSpinnerShown = false;
      })
    ).subscribe(
      {
        next: (data: IPlanetsResponse) => {
          // If there are some planets already loaded - expand them into array
          this.planets = [...this.planets, ...data.results].sort((a, b) => a.name.localeCompare(b.name));
          this.nextPlanetAddress = data.next;
        },
        error: () => {
          this.showError = true;
        }
      }
    );
  }
}
