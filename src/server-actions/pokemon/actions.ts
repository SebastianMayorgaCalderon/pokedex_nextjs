import { POKEMON_API_BASE_URL } from "src/constants"
import { Pokemon, parsePokemonDTO } from 'src/models/pokemon';

export const getPokemonList = async (pagination: any = null) => {
  const res = await fetch(`${POKEMON_API_BASE_URL}?limit=100&offset=0`)
  const data = await res.json();
  const pokemonList = await Promise.all(data.results.map(async (pokemon: { url: string }): Promise<Pokemon | null> => {
    const pokemonData = getPokemonDetails(pokemon.url)
    return pokemonData;
  }))

  return pokemonList.filter(pokemon => pokemon);
}

export const getPokemonDetails = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = parsePokemonDTO(data);

  return pokemon;
}