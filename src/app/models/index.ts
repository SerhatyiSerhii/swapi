export interface IPlanetsResponse {
    count: number;
    next: string;
    results: IPlanet[];
}

export interface IPlanet {
    name: string;
    diameter: string;
    climate: string;
    population: string;
    residents: string[];
}
export interface IResident {
    name: string;
    height: string;
    birth_year: string;
}
