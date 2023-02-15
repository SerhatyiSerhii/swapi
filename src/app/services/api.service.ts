import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { IBackEndPlanetItem } from "../models/back-end-planet-item.interface";
import { IPlanetItem } from "../models/planet-item.interface";
import { IResident } from "../models/resident.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl: string = 'https://swapi.dev/api'

    private get planetsAddress(): string {
        return this.baseUrl + '/planets';
    }

    constructor(private http: HttpClient) { }

    getPlanets(): Observable<IPlanetItem[]> {
        return this.performPlanetsRequest(this.planetsAddress, []);
    }

    getResidents(arr: string[]): Observable<IResident[]> {
        return this.performResidentsRequest(arr, 0, []);
    }

    private performPlanetsRequest(url: string, planets: IPlanetItem[]): Observable<IPlanetItem[]> {
        if (url) {
            return this.http.get<IBackEndPlanetItem>(url).pipe(
                switchMap((response: IBackEndPlanetItem) => {
                    return this.performPlanetsRequest(response.next, [...planets, ...response.results]);
                })
            );
        } else {
            return of(planets);
        }
    }

    private performResidentsRequest(arr: string[], index: number, result: IResident[]): Observable<IResident[]> {
        if (index < arr.length) {
            return this.http.get<IResident>(arr[index]).pipe(
                tap(res => result.push(res)),
                switchMap(() => {
                    return this.performResidentsRequest(arr, index + 1, result);
                })
            )
        } else {
            return of(result);
        }
    }
}