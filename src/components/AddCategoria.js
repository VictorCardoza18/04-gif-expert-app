import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategoria = ({ setCategorias }) => {
  const [inputText, setInputText] = useState("");

  const HandleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Funcion que se ejecuta al subir el formulario
  const AñadirCategoriaLista = (event) => {
    event.preventDefault();

    if (inputText.trim().length >= 2) {
      setCategorias((categorias) => [...categorias, inputText]);
      setInputText("");
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" value={inputText} onChange={HandleInputChange}></input>
    </form>
  );
};

AddCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategoria;
