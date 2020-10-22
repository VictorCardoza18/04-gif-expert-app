import React, { useState } from "react";

const GifExpertApp = () => {
  // const categorias = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    setCategorias(["Kakegurui", ...categorias]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button onClick={handleAdd}>Agregar</button>

      <ol>
        {categorias.map((categoria, indice) => (
          <li key={categoria}> {categoria} </li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
