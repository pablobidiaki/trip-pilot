export enum TripType {
  Beach = "Praia",
  Adventure = "Aventura",
  Cultural = "Cultura",
  Nature = "Natureza",
  Romantic = "Romantico",
  Economy = "Econômico"
}

export const TripTypesArray: string[] = [
  "Praia",
  "Aventura",
  "Cultura",
  "Natureza",
  "Romantico",
  "Econômico"
]

export const AiModels: string[] = [
  "Gemini",
  "OpenAi"
]

export const mapInitialPosition = {
  center: [20, -40] as [number, number],
  zoom: 1,
}