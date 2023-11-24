import { POKEMON_API_BASE_URL } from "src/constants"

export const getPokemonList = async (pagination: any = null) => {
  const res = await fetch(POKEMON_API_BASE_URL)
  const data = await res.json()
  return data
}