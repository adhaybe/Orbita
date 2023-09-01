import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-viewer',
  templateUrl: './planet-viewer.component.html',
  styleUrls: ['./planet-viewer.component.scss']
})
export class PlanetViewerComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe(data => {
      this.planets = data;
    })
  }
}
