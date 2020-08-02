import React, { Component } from "react";
import PokemonLineup from "./PokemonLineup/PokemonLineup";
import PokemonData from "./PokemonData/PokemonData";
import PokedexArea from "./PokedexArea/PokedexArea";
import "./App.css";

export default class App extends Component {
  state = { pokemons: [], selectedPokemon: null };
  render() {
    const { pokemons, selectedPokemon } = this.state;
    return (
      <div className="app">
        <div className="left-group">
          <PokemonLineup
            pokemons={pokemons}
            selectAPokemon={this.selectAPokemon}
          />
          <div>
            <h2>Pokemon Edit</h2>
            {pokemons.find((p) => p.name === selectedPokemon.name) ? (
              <PokemonData
                pokemon={selectedPokemon}
                onsubmit={this.updateAPokemon}
              />
            ) : (
              <h4>Select a pokemon on your list to edit</h4>
            )}
          </div>
        </div>
        <div className="right-group">
          <PokedexArea
            pokemons={pokemons}
            selectedPokemon={selectedPokemon}
            addAPokemon={this.addAPokemon}
            removeAPokemon={this.removeAPokemon}
            selectAPokemon={this.selectAPokemon}
          />
        </div>
      </div>
    );
  }

  addAPokemon = (pokemonInfo) => {
    this.setState({ pokemons: [...this.state.pokemons, pokemonInfo] });
  };

  removeAPokemon = (pokemonInfo) => {
    this.setState({
      pokemons: this.state.pokemons.filter(
        (pokemon) => pokemon.id !== pokemonInfo.id
      ),
    });
  };

  selectAPokemon = (pokemonInfo) => {
    this.setState({ selectedPokemon: pokemonInfo });
  };

  updateAPokemon = (pokemon) => {
    const pokemonList = [...this.state.pokemons];
    const pokemonToUpdate = this.state.pokemons.find(
      (p) => p.name === pokemon.name
    );
    pokemonList[pokemonToUpdate] = pokemon;
    this.setState({
      selectedPokemon: pokemon,
      pokemons: pokemonList,
    });
  };
}
