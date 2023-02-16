import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { IPlanetsResponse, IResident } from "../models/index";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl: string = 'https://swapi.dev/api'

    private get planetsAddress(): string {
        return this.baseUrl + '/planets';
    }

    constructor(private http: HttpClient) { }

    getPlanet(planetAddress: string): Observable<IPlanetsResponse> {
        // If address is empty string - use base url, otherwise - use address as url
        return this.http.get<IPlanetsResponse>(planetAddress ? planetAddress : this.planetsAddress);
    }

    getResidents(residents: string[]) {
        return this.performResidentsRequest(residents);
    }

    private performResidentsRequest(residents: string[]): Observable<IResident[]> {
        return forkJoin(residents.map(resident => this.http.get<IResident>(resident)));
    }
}