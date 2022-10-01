import React from "react";
import ProductCard from "../ProductCard";

function ProductList({ list }) {
  return (
    <div>
      {list.length ? (
        <div>
          <ul>
            {list.map(item =>
              <ProductCard item={item}/>
            )}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Não temos produtos disponíveis</h2>
        </div>
      )}
    </div>
  );
}

export default ProductList;
