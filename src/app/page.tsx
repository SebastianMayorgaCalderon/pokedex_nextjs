import React from "react";
import { getPokemonList } from "src/server-actions/pokemon/actions";

type Props = {};

const HomePage = async (props: Props) => {
  const pokemonList = await getPokemonList();
  return <div>{JSON.stringify(pokemonList)}</div>;
};

export default HomePage;
