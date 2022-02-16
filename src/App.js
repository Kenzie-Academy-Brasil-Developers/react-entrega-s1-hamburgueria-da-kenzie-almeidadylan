import "./App.css";
import React, { useEffect, useState } from "react";
import Logohamburgueria from "./components/logo/logo";
import Inputsearch from "./components/inputSearch/inputSearch";
import Productslist from "./components/ProductsList/ProductList";
import Cart from "./components/Cart/cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((Element) => {
        setProducts(Element);
      });
  }, []);

  function filtro(str) {
    const filtragem = products.filter((item) => {
      return item.name.toLowerCase().includes(str.toLowerCase());
    });
    setFilteredProducts(filtragem);
  }

  function handleClick(id) {
    console.log(id);
    const newProductList = currentSale.filter((item) => {
      return item.id !== id;
    });
    setCurrentSale(newProductList);
  }

  function showProducts(id) {
    const found = products.find((item) => {
      return item.id === id;
    });
    for (let i = 0; i < currentSale.length; i++) {
      if (currentSale[i] === found) {
        return;
      }
    }
    setCurrentSale([...currentSale, found]);
  }

  function precoTotal() {
    const total = currentSale.reduce((acu, valor) => (acu += valor.price), 0);
    setCartTotal(total);
  }

  return (
    <section className="App">
      <header className="App-header">
        <Logohamburgueria />
        <Inputsearch funcao={filtro} />
      </header>
      <div className="corpo-do-site">
        <div>
          <Productslist
            lista={filteredProducts.length > 0 ? filteredProducts : products}
            funcao={showProducts}
          />
        </div>
        <div className="parte-do-carrinho">
          <Cart
            lista={currentSale}
            funcao={handleClick}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
