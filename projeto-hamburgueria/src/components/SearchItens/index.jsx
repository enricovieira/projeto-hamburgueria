import React, { useState } from "react";
import { Form } from "./style";

function Search({ setFilter, list }) {
  const [valueInput, setValueInput] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const search = list.filter((item) =>
      item.name && item.category
        ? item.name.toLowerCase().includes(valueInput.toLowerCase()) ||
          item.category.toLowerCase().includes(valueInput.toLowerCase())
        : console.log("funcionando")
    );

    setFilter(search);
  }

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Digite Pesquisa"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </Form>
  );
}

export default Search;
