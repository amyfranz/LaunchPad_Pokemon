import React from "react";

export default function PokemonCard({
  pokemon,
  onclick = (pokemon) => {
    console.log(pokemon);
  },
}) {
  return (
    <div onClick={() => onclick(pokemon)}>
      <h2>{pokemon.species.name}</h2>
      <div className="pokemonImg">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
    </div>
  );
}
