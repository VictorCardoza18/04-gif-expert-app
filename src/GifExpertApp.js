import React, { useState } from "react";
import AddCategoria from "./components/AddCategoria";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categoriasArr, setCategorias] = useState(["One Punch Man"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategoria setCategorias={setCategorias} />
      <hr />

      <ol>
        {categoriasArr.map((categoria) => (
          <GifGrid categoria={categoria} key={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
