import React from "react";
import { Li, Container, ImgContainer } from "./style";

function ProductCard({ item, buyItem, cartList }) {
  return (
    <Li>
      <ImgContainer>
        <img src={item.img} alt={item.name} />
      </ImgContainer>

      <Container>
        <h2>{item.name}</h2>
        <span className="itemCategory">{item.category}</span>
        <span className="itemPrice">{`R$ ${item.price}`}</span>
        <button
          onClick={() => 
            buyItem(item)
          }
        >
          Adicionar
        </button>
      </Container>
    </Li>
  );
}

export default ProductCard;
