import { Component, OnInit } from '@angular/core';
import { Planet, PlanetName, Position, planetOverlayPositions } from 'src/app/models/planet.model';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-viewer',
  templateUrl: './planet-viewer.component.html',
  styleUrls: ['./planet-viewer.component.scss']
})
export class PlanetViewerComponent implements OnInit {
  planet!: Planet | null;
  selectedTab: 'overview' | 'internalStructure' | 'surfaceGeology' = 'overview';
  currentPlanet: string = "";
  planetName!: PlanetName;
  

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.selectedPlanet$.subscribe((selectedPlanet => {
      if (selectedPlanet) {
        this.planet = selectedPlanet;
        this.currentPlanet = this.planet.name;
      } else {
        // Fetch all planets and set the first one as default
        this.planetService.getPlanets().subscribe((data) => {
          if(data.length > 0) {
            this.planet = data[0];
            this.currentPlanet = data[0].name;
            this.planetService.setSelectedPlanet(data[0]);
          }
        });
      }
    }));
  }

  changeTab(tab: 'overview' | 'internalStructure' | 'surfaceGeology') {
    this.selectedTab = tab;
  }

  get currentPlanetClass() {
    return this.currentPlanet ? this.currentPlanet.toLowerCase() : '';
  }

  getOverlayPosition(): Position | {} {
    return this.currentPlanet.toLowerCase() ? planetOverlayPositions[this.currentPlanet.toLowerCase()] : {};
  }
}
