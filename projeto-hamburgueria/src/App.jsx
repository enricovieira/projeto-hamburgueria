import GlobalStyle from "./styles/global";
import logo from "./assets/logo.svg";
import Search from "./components/SearchItens";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Header, Main } from "./styles/styles";
import { useState, useEffect } from "react";

function App() {
  const [isItens, setIsItens] = useState([]);
  const [isCart, setIsCart] = useState([]);

  function buyItem(item) {
    setIsCart([...isCart, item]);
  }

  function removeItem(itemSelected) {
    const newCart = isCart.filter((item, index) => index !== itemSelected);
    setIsCart(newCart);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setIsItens(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="headerContainer">
          <img src={logo} alt="Burguer Kenzie logo" />
          <Search />
        </div>
      </Header>
      <Main>
        <ProductList list={isItens} buyItem={buyItem} />
        <Cart list={isCart} removeItem={removeItem} />
      </Main>
    </>
  );
}

export default App;
