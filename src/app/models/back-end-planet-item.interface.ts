import { IPlanetItem } from "./planet-item.interface";

export interface IBackEndPlanetItem {
    count: number;
    next: string;
    previous: string;
    results: IPlanetItem[];
}