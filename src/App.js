import "./App.css";
import React, { useEffect, useState } from "react";
import Logohamburgueria from "./components/logo/logo";
import Inputsearch from "./components/inputSearch/inputSearch";
import Productslist from "./components/ProductsList/ProductList";
import Cart from "./components/Cart/cart";
//import Cartproduct from "./components/CartProduct/CartProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [contador, setContador] = useState(1);

  /*function showProducts(){}
  function handleClick({id}){
    //Element.find()
  }*/

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((Element) => {
        //console.log(Element)
        setProducts(Element);
      });
  }, []);

  function remove(id) {
    console.log(id);
    const newProductList = currentSale.filter((item) => {
      return item.id !== id;
    });
  //  setCurrentSale(newProductList)
    console.log(newProductList)
  }

  function add(id) {
    const found = products.find((item) => {
      return item.id === id;
    });
    setCurrentSale([...currentSale, found])
    console.log(currentSale)
    
  }
  //const produtosFiltrados = products.name.toLowerCase().filter((produto) => produto.name.toLowerCase().includes(filteredProducts))
  //console.log(produtosFiltrados)
  return (
    <section className="App">
      <header className="App-header">
        <Logohamburgueria />
        <Inputsearch
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </header>
      <div className="corpo-do-site">
        <div>
          <Productslist lista={products}  funcao={add}/>
        </div>
        <div>
          <Cart
            lista={currentSale}
            contador={contador}
            setContador={setContador}
          />
          <button onClick={add}>aperte</button>
        </div>
      </div>
    </section>
  );
}

export default App;
