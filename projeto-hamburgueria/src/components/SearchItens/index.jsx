import React, { useState } from "react";
import { Form } from "./style";

function Search() {
  function onSubmit(event) {
    event.preventDefault();

  }

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Digite Pesquisa"
      />
      <button type="submit">Pesquisar</button>
    </Form>
  );
}

export default Search;
