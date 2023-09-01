import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private data: string = 'assets/planet-data/data.json';

  constructor(private http: HttpClient) { }

  public getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.data);
  }
}
