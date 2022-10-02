import React from "react";
import ProductCard from "../ProductCard";
import { Ul } from "./style";

function ProductList({ list, buyItem }) {
  return (
    <div>
      {list.length ? (
        <div>
          <Ul>
            {list.map((item) => (
              <ProductCard item={item} key={item.id} buyItem={buyItem}/>
            ))}
          </Ul>
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
