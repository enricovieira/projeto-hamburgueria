import React from "react";
import { Form } from "./style";

function Search() {
  return (
    <Form>
      <input type="text" placeholder="Digite Pesquisa" />
      <button>Pesquisar</button>
    </Form>
  );
}

export default Search;
