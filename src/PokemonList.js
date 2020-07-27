import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonImage from "./PokemonImage";
import { Link } from "react-router-dom";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);

      setPokemons(response.data.results);
    }
    getData();
  }, [pokemons]);

  return (
    <div className="container">
      {pokemons.map((pokemon) => (
        <div className="card col-3" style={styleCard} key={pokemon.name}>
          <PokemonImage name={pokemon.name} />
          <Link className="underline" to={`/pokemons/${pokemon.name}`}>
            {pokemon.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

const styleCard = {
  width: "18rem",
  display: "inline-block",
};
