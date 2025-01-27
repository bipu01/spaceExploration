export type PlanetInfo = {
    diameter: number;
    surfaceTemperature: string;
    atmosphereComposition: string[];
    abundantResources: string[];
    distanceFromSun: number;
    rotationTime: string;
    revolutionTime: string;
    interestingFact: string;
    numberOfMoons: number;
};

const solarSystem = {
    mercury: {
        diameter: 4880, // in km
        surfaceTemperature: "-180°C to 430°C",
        atmosphereComposition: ["Oxygen", "Sodium", "Hydrogen"],
        abundantResources: ["Iron", "Nickel", "Silicates"],
        distanceFromSun: 57.9, // million km
        rotationTime: "59 Earth days",
        revolutionTime: "88 Earth days",
        interestingFact: "Smallest planet with fastest orbital speed (47.87 km/s)",
        numberOfMoons: 0,
    },
    venus: {
        diameter: 12104,
        surfaceTemperature: "462°C (Average)",
        atmosphereComposition: ["Carbon Dioxide", "Nitrogen", "Sulfuric Acid Clouds"],
        abundantResources: ["Basalt", "Sulfur Compounds", "Carbon Dioxide"],
        distanceFromSun: 108.2,
        rotationTime: "243 Earth days (Retrograde)",
        revolutionTime: "225 Earth days",
        interestingFact: "Hottest planet with volcanic surface and acidic clouds",
        numberOfMoons: 0,
    },
    earth: {
        diameter: 12742,
        surfaceTemperature: "-89°C to 58°C",
        atmosphereComposition: ["Nitrogen", "Oxygen", "Argon"],
        abundantResources: ["Water", "Silicon", "Oxygen"],
        distanceFromSun: 149.6,
        rotationTime: "23h 56m",
        revolutionTime: "365.25 days",
        interestingFact: "Only known planet supporting life with liquid surface water",
        numberOfMoons: 1,
    },
    mars: {
        diameter: 6779,
        surfaceTemperature: "-125°C to 20°C",
        atmosphereComposition: ["Carbon Dioxide", "Nitrogen", "Argon"],
        abundantResources: ["Iron Oxide", "Silicon", "Water Ice"],
        distanceFromSun: 227.9,
        rotationTime: "24h 37m",
        revolutionTime: "687 Earth days",
        interestingFact: "Home to Olympus Mons - largest volcano in solar system",
        numberOfMoons: 2,
    },
    jupiter: {
        diameter: 139820,
        surfaceTemperature: "-145°C (Cloud tops)",
        atmosphereComposition: ["Hydrogen", "Helium", "Methane"],
        abundantResources: ["Liquid Metallic Hydrogen", "Helium", "Ammonia"],
        distanceFromSun: 778.3,
        rotationTime: "9h 56m",
        revolutionTime: "12 Earth years",
        interestingFact: "Largest planet with Great Red Spot (400-year-old storm)",
        numberOfMoons: 95,
    },
    saturn: {
        diameter: 116460,
        surfaceTemperature: "-178°C",
        atmosphereComposition: ["Hydrogen", "Helium", "Methane"],
        abundantResources: ["Hydrogen", "Helium", "Ice Particles"],
        distanceFromSun: 1427,
        rotationTime: "10h 42m",
        revolutionTime: "29.5 Earth years",
        interestingFact: "Most extensive ring system made of ice and rock",
        numberOfMoons: 146,
    },
    uranus: {
        diameter: 50724,
        surfaceTemperature: "-195°C",
        atmosphereComposition: ["Hydrogen", "Helium", "Methane"],
        abundantResources: ["Water", "Methane", "Ammonia Ice"],
        distanceFromSun: 2871,
        rotationTime: "17h 14m (Retrograde)",
        revolutionTime: "84 Earth years",
        interestingFact: "Rotates on its side (98° axial tilt)",
        numberOfMoons: 27,
    },
    neptune: {
        diameter: 49244,
        surfaceTemperature: "-201°C",
        atmosphereComposition: ["Hydrogen", "Helium", "Methane"],
        abundantResources: ["Water", "Ammonia", "Methane Ice"],
        distanceFromSun: 4498,
        rotationTime: "16h 6m",
        revolutionTime: "165 Earth years",
        interestingFact: "Strongest supersonic winds (2,100 km/h)",
        numberOfMoons: 14,
    },
};

export default solarSystem;

// Note: Moon counts are updated per NASA's latest data (2023)
// Distances are average orbital distances from Sun
// Temperature values represent approximate ranges or averages
