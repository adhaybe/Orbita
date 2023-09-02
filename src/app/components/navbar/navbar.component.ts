import { Component, HostListener, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  planets: Planet[] = [];

  isMobileView: boolean = false;
  isOverlayVisible: boolean = false;

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.setMobileView();
    this.planetService.getPlanets().subscribe((data) => {
      this.planets = data;
    });
  }

  onPlanetSelect(name: string): void {
    const selectedPlanet = this.planets.find(planet => planet.name === name);
    if (selectedPlanet) {
      this.planetService.setSelectedPlanet(selectedPlanet);
    }

    console.log(selectedPlanet);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any): void {
    this.setMobileView();
  }

  toggleOverlay() {
    this.isOverlayVisible = !this.isOverlayVisible;
  }

  private setMobileView(): void {
    this.isMobileView = window.innerWidth <= 666;
  }
}
