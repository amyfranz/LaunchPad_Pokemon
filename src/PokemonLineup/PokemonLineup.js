import React from "react";
import "./PokemonLineup.css";

export default function PokemonLineup({ pokemons, selectAPokemon }) {
  return (
    <div className="pokemonLineup">
      <h2>Pokemon Line Up</h2>
      <div className="pokemonList">
        {pokemons.map((pokemon) => (
          <div className="pokemonImg" onClick={() => selectAPokemon(pokemon)}>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
