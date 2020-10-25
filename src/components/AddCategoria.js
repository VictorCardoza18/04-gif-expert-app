import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategoria = ({ setCategorias }) => {
  const [inputText, setInputText] = useState("");

  // Funcione que se ejecutara cada que cambia el input
  const InputChangeText = (event) => {
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
    <form onSubmit={AñadirCategoriaLista}>
      <input type="text" value={inputText} onChange={InputChangeText}></input>
    </form>
  );
};

AddCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};

export default AddCategoria;
