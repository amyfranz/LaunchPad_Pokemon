import React, { Component } from "react";
import Input from "../CommonComponents/Input";
import "./PokemonData.css";

export default class PokemonData extends Component {
  state = { ...this.props.pokemon };
  render() {
    return (
      <div className="pokemonData">
        <h3>Name: {this.state.name}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onsubmit(this.state);
          }}
        >
          <div className="flex">
            <Input
              value={this.state.base_experience}
              name={"base_experience"}
              label={"Base Experience:"}
              type={"number"}
              onchange={this.changeValue}
            />
            <Input
              value={this.state.order}
              name={"order"}
              label={"Order:"}
              type={"number"}
              onchange={this.changeValue}
            />
          </div>
          <div className="flex">
            <Input
              value={this.state.height}
              name={"height"}
              label={"Height:"}
              type={"number"}
              onchange={this.changeValue}
            />
            <Input
              value={this.state.weight}
              name={"weight"}
              label={"Weight:"}
              type={"number"}
              onchange={this.changeValue}
            />
          </div>
          <div className="flex">
            {this.state.types.map((t, index) => (
              <Input
                key={t.slot}
                value={t.type.name}
                name={`types ${index} type name`}
                label={`Type ${index + 1}:`}
                onchange={this.changeName}
              />
            ))}
          </div>
          <div className="flex">
            {this.state.abilities.map((a, index) => (
              <Input
                key={a.slot}
                value={a.ability.name}
                name={`abilities ${index} ability name`}
                label={`Ability ${index + 1}:`}
                onchange={this.changeName}
              />
            ))}
          </div>
          <div
            className="button"
            onClick={(e) => {
              e.preventDefault();
              this.props.onsubmit(this.state);
            }}
          >
            <div className="btn">Submit</div>
          </div>
        </form>
      </div>
    );
  }
  changeValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  changeName = (e) => {
    const { name, value } = e.target;
    const path = name.split(" ");
    const newState = [...this.state[path[0]]];
    newState[path[1]][path[2]][path[3]] = value;
    this.setState({ [path[0]]: newState });
  };
}
