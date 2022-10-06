import GlobalStyle from "./styles/global";
import logo from "./assets/logo.svg";
import Search from "./components/SearchItens";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Header, Main } from "./styles/styles";
import { useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [isItens, setIsItens] = useState([]);
  const [isCart, setIsCart] = useState([]);
  const [isFilter, setFilter] = useState([]);

  function buyItem(item) {
    const cartItens = isCart.find((product) => product.id === item.id);

    if (cartItens) {
      toast("Este produto já foi adicionado", {
        position: "top-right",
        autoClose: 1000,
      });
    } else {
      setIsCart((previous) => [...previous, item]);
    }
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
      <ToastContainer />
      <Header>
        <div className="headerContainer">
          <img src={logo} alt="Burguer Kenzie logo" />
          <Search setFilter={setFilter} list={isItens} />
        </div>
      </Header>
      <Main>
        <ProductList
          list={isItens}
          buyItem={buyItem}
          cartList={isCart}
          isFilter={isFilter}
        />
        <Cart list={isCart} removeItem={removeItem} setIsCart={setIsCart} />
      </Main>
    </>
  );
}

export default App;
