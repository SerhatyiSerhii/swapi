import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPlanetsResponse, IResident } from "../models/index";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class PlanetService {

    constructor(
        private api: ApiService
    ) { }

    getPlanet(address: string): Observable<IPlanetsResponse> {
        return this.api.getPlanet(address);
    }

    getResidents(residents: string[]): Observable<IResident[]> {
        return this.api.getResidents(residents);
    }
}