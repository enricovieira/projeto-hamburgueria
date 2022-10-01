import GlobalStyle from "./styles/global";
import logo from "./assets/logo.svg";
import Search from "./components/SearchItens";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Header } from "./styles/styles";

function App() {
  const lista = [
    // {
    //   name: "hamburg",
    //   img: "https://img.estadao.com.br/thumbs/640/resources/jpg/7/3/1653514781237.jpg",
    //   price: 12,
    //   category: "comida",
    // },
  ];

  return (
    <>
      <GlobalStyle />
      <Header>
        <div className="headerContainer">
          <img src={logo} alt="Burguer Kenzie logo" />
          <Search />
        </div>
      </Header>
      <main>
        <ProductList list={lista} />
        <Cart list={lista} />
      </main>
    </>
  );
}

export default App;
