import NavBar from "src/components/nav-bar";
import PokemonListItem from "src/components/pokemon/pokemon-list-item";
import { getPokemonList } from "src/server-actions/pokemon/actions";

type Props = {};

const HomePage = async (props: Props) => {
  const pokemonList = await getPokemonList();
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-6 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};
export default HomePage;
