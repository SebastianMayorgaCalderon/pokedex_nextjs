export type Pokemon = { id: string, name: string, sprites: string[], };

export const parsePokemonDTO = (pokemonRawResponseData: any): Pokemon | null => {
  const { id, name, sprites } = pokemonRawResponseData;
  if (!id && !name && !sprites) return null
  const pokemonOfficialArtWorkSprites = sprites?.other["official-artwork"] || {};
  const pokemonSprites = Object.keys(pokemonOfficialArtWorkSprites).map(key => `${pokemonOfficialArtWorkSprites[key]}`)
  return { id, name, sprites: pokemonSprites }

}