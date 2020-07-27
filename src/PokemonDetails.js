import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PokemonDetails({ name }) {
  const [pokemonName, setPokemonName] = useState("");
  const [baseExperience, setBaseExperience] = useState("");
  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sprite1, setSprite1] = useState("");
  const [sprite2, setSprite2] = useState("");
  const [sprite3, setSprite3] = useState("");
  const [sprite4, setSprite4] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setPokemonName(response.data.name);
      setBaseExperience(response.data.base_experience);
      setWeight(response.data.weight);
      setHeight(response.data.height);
      setSprite1(response.data.sprites.front_shiny);
      setSprite2(response.data.sprites.front_default);
      setSprite3(response.data.sprites.back_default);
      setSprite4(response.data.sprites.back_shiny);
      setMoves(response.data.moves);
      setTypes(response.data.types);
    }
    getData();
  }, []);

  return (
    <div className="container text-center">
      <div className="card">
        <div>
          <img src={sprite1} className="rounded" alt={pokemonName} />
          <img src={sprite4} className="rounded" alt={pokemonName} />
          <img src={sprite2} className="rounded" alt={pokemonName} />
          <img src={sprite3} className="rounded" alt={pokemonName} />
        </div>

        <div className="card-body">
          <h5 className="card-title">{pokemonName}</h5>
          <p className="card-text">
            {types.length} Types:
            {types.map((type, i) => (
              <div className="list-group-item-info">{type.type.name}</div>
            ))}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <div className="list-group-item-success">
              Base experience: {baseExperience}
            </div>
          </li>
          <li className="list-group-item">Weight: {weight}</li>
          <li className="list-group-item">Height: {height}</li>

          <li className="list-group-item">
            Number of Moves: {moves.length}
            {moves.map((move, i) => (
              <div className="list-group-item-info">
                <span>{i + 1 + " "}</span>
                {move.move.name}
              </div>
            ))}
          </li>
        </ul>
        <div className="card-body">
          <Link className="underline" to={"/pokemons"}>
            Pokemons List /
          </Link>
          <Link className="underline" to={"/types"}>
            Types List
          </Link>
        </div>
      </div>
    </div>
  );
}
