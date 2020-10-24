import React, { useState } from "react";
import AddCategoria from "./components/AddCategoria";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   setCategorias(["Kakegurui", ...categorias]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategoria setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias.map((categoria, indice) => (
          <li key={categoria}> {categoria} </li>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
