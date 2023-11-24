import { POKEMON_API_BASE_URL } from "src/constants"
import { getPokemonList } from "src/server-actions/pokemon/actions"

export async function GET() {
  const data = await getPokemonList();
  return Response.json({ data })
}