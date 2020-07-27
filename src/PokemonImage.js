import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokemonImage({ name }) {
  const [sprite, setSprit] = useState("");
  useEffect(() => {
    async function getImage() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      setSprit(response.data.sprites.front_default);
    }
    getImage();
  }, [sprite]);

  return <img src={sprite} class="card-img-top" alt={name} />;
}
