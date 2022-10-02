import React from "react";
import { Container } from "./style";

function Cart({ list, removeItem }) {
  const totalCart = list.reduce((acc, cur) => acc + Number(cur.price), 0);

  return (
    <Container>
      <header>
        <span>Carrinho de compras</span>
      </header>
      {list.length ? (
        <>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <div className="imgContainer">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="infoContainer">
                  <h2>{item.name}</h2>
                  <span className="itemCategory">{item.category}</span>
                </div>
                <button
                  onClick={() => {
                    removeItem(index);
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="cartCount">
            <div>
              <p>
                Total
                <span>{`R$ ${totalCart}`}</span>
              </p>
              <button>Remover todos</button>
            </div>
          </div>
        </>
      ) : (
        <ul>
          <div>
            <p>Sua sacola está vazia</p> <span>adicione itens</span>
          </div>
        </ul>
      )}
    </Container>
  );
}

export default Cart;
