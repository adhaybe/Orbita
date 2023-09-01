import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { PlanetViewerComponent } from './components/planet-viewer/planet-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlanetDetailComponent,
    PlanetViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
