import React, { useState } from "react";
import Search from "./Components/Search";
import PokemonInfo from "./Components/PokemonInfo";
import "./PokedexArea.css";

export default function PokedexArea({
  pokemons,
  selectedPokemon,
  addAPokemon,
  removeAPokemon,
  selectAPokemon,
}) {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const clickSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`)
      .then((data) => data.json())
      .then((res) => {
        selectAPokemon(res);
      })
      .catch((error) => console.log(error));
    setSearch("");
  };
  return (
    <div className="pokedexArea">
      <Search clickSearch={clickSearch} onChange={onChange} search={search} />
      {selectedPokemon ? (
        <PokemonInfo
          addAPokemon={addAPokemon}
          selectedPokemon={selectedPokemon}
          pokemons={pokemons}
          removeAPokemon={removeAPokemon}
        />
      ) : null}
    </div>
  );
}
