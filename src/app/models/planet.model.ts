export interface PlanetContent {
    content: string;
    source: string;
}

export interface PlanetImages {
    planet: string;
    internal: string;
    geology: string;
}

export interface Planet {
    name: string;
    overview: PlanetContent;
    structure: PlanetContent;
    geology: PlanetContent;
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: PlanetImages;
}

export type PlanetName = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

export interface Position {
  marginTop: string;
  marginRight: string;
}

export const planetOverlayPositions: Record<string, Position> = {
  mercury: { marginTop: '10rem', marginRight: '3rem' },
  venus: { marginTop: '15rem', marginRight: '6rem' },
  earth: { marginTop: '17rem', marginRight: '8rem' },
  mars: { marginTop: '10rem', marginRight: '4.5rem' },
  jupiter: { marginTop: '23rem', marginRight: '12rem' },
  saturn: { marginTop: '20rem', marginRight: '15rem' },
  uranus: { marginTop: '16rem', marginRight: '7.5rem' },
  neptune: { marginTop: '15rem', marginRight: '7rem' }
};
