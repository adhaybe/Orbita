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
  top: string;
  left: string;
}

export const planetOverlayPositions: Record<string, Position> = {
  mercury: { top: '10rem', left: '38.5rem' },
  venus: { top: '15rem', left: '35rem' },
  earth: { top: '17rem', left: '34rem' },
  mars: { top: '10rem', left: '37.2rem' },
  jupiter: { top: '23rem', left: '30rem' },
  saturn: { top: '20rem', left: '27rem' },
  uranus: { top: '16rem', left: '33.5rem' },
  neptune: { top: '15rem', left: '34rem' }
};
