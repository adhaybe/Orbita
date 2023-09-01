import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  planets = [
    { name: 'Mercury', route: '/mercury', icon: 'mercury' },
    { name: 'Venus', route: '/venus', icon: 'venus' },
    { name: 'Earth', route: '/earth', icon: 'earth' },
    { name: 'Mars', route: '/mars', icon: 'mars' },
    { name: 'Jupiter', route: '/jupiter', icon: 'jupiter' },
    { name: 'Saturn', route: '/saturn', icon: 'saturn' },
    { name: 'Uranus', route: '/uranus', icon: 'uranus' },
    { name: 'Neptune', route: '/neptune', icon: 'neptune' },
  ];

  isMobileView: boolean = false;
  isOverlayVisible: boolean = true;

  ngOnInit(): void {
    this.setMobileView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any): void {
    this.setMobileView();
  }

  toggleOverlay() {
    this.isOverlayVisible  = !this.isOverlayVisible;
  }

  private setMobileView(): void {
    this.isMobileView = window.innerWidth <= 666;
  }
}
