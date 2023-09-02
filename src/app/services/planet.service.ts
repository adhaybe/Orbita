import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private data: string = 'assets/planet-data/data.json';

  private selectedPlanetSubject = new BehaviorSubject<Planet | null>(null);
  selectedPlanet$ = this.selectedPlanetSubject.asObservable();

  
  setSelectedPlanet(planet: Planet): void {
    this.selectedPlanetSubject.next(planet);
  }


  constructor(private http: HttpClient) { }

  public getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.data);
  }
}
