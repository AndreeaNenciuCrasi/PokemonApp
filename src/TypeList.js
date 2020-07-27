import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TypeList() {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`https://pokeapi.co/api/v2/type/`);

      setTypes(response.data.results);
    }
    getData();
  }, [types]);

  return (
    <div className="container">
      {types.map((type) => (
        <div
          className="card col-3"
          style={styleCard}
          key={type.name}
          setName={type.name}
        >
          <div className="card-body">
            <p className="card-text">{type.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const styleCard = {
  width: "18rem",
  display: "inline-block",
};
