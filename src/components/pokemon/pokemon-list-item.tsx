import React from "react";
import { Pokemon } from "src/models/pokemon";
import Image from "next/image";

type Props = {
  pokemon: Pokemon;
};

const PokemonListItem = ({ pokemon }: Props) => {
  const { name, id, sprites } = pokemon;
  return (
    <div>
      <h1>{name} </h1>
      <h2>{id}</h2>
      <Image
        src={sprites[0]}
        width={150}
        height={150}
        alt={`Pokemon ${name} front`}
      />
    </div>
  );
};

export default PokemonListItem;
