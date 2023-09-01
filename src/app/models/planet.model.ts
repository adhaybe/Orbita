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
