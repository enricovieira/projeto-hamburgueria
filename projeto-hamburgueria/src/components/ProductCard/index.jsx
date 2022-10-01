import React from "react";

function ProductCard({ item }) {
  return (
    <li key={item.id}>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <span>{item.category}</span>
      <span>{item.price}</span>
      <button>Adicionar</button>
    </li>
  );
}

export default ProductCard
