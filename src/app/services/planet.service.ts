import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IPlanetItem } from "../models/planet-item.interface";
import { IResident } from "../models/resident.interface";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class PlanetService {

    constructor(
        private api: ApiService
    ) { }

    getPlanets(): Observable<IPlanetItem[]> {
        return this.api.getPlanets();
    }

    getResidents(residents: string[]): Observable<IResident[]> {
        return this.api.getResidents(residents);
    }
}