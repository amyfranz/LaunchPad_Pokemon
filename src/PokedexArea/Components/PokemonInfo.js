import React from "react";

export default function PokemonInfo({
  addAPokemon,
  selectedPokemon,
  pokemons,
  removeAPokemon,
}) {
  const pokemonOnList = pokemons.find(
    (pokemon) => pokemon.id === selectedPokemon.id
  );
  return (
    <div className="info">
      <h2>{selectedPokemon.species.name}</h2>
      <div className="pokemonImg">
        <img src={selectedPokemon.sprites.front_default} alt="" />
      </div>
      <div>
        <h3>Info:</h3>
        <h4>Base Experience:</h4>
        <p>{selectedPokemon.base_experience}xp</p>
        <h4>Order:</h4> <p>{selectedPokemon.order}</p>
        <h4>Height:</h4>
        <p>{selectedPokemon.height / 10}m</p>
        <h4>Weight:</h4>
        <p>{selectedPokemon.weight / 10}kg</p>
        <h4>Type: </h4>
        {selectedPokemon.types.map((type) => (
          <p key={type.slot}>{type.type.name}</p>
        ))}
        <h4>Abilities:</h4>
        {selectedPokemon.abilities.map((ability, index) => (
          <p key={index}>{ability.ability.name}</p>
        ))}
      </div>
      <div
        className="button"
        onClick={() => {
          pokemonOnList
            ? removeAPokemon(selectedPokemon)
            : addAPokemon(selectedPokemon);
        }}
      >
        <div className="btn">
          {pokemonOnList ? "Remove Pokemon" : "Add Pokemon"}
        </div>
      </div>
    </div>
  );
}
