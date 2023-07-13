export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonMetaData[];
}

export interface PokemonMetaData {
  name: string;
  url: string;
  id: number;
  img: string;
}
