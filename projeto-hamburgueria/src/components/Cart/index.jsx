import React from "react";

function Cart({ list }) {
  return (
    <div>
      <header>
        <span>Carrinho de compras</span>
      </header>
      <ul>
        {list.length ? (
          list.map((item) => (
            <li key={item.id}>
              <div>
                <h2>{item.name}</h2>
                <span>{item.category}</span>
              </div>
              <button>Remover</button>
            </li>
          ))
        ) : (
          <div>
            <p>Sua sacola está vazia</p> <span>adicione itens</span>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Cart;
