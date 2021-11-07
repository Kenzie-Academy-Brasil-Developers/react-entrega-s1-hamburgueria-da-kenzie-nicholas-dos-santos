import { render } from "@testing-library/react";
import "./App.css";
import MenuContainer from "./components/MenuContainer";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

//Responsável por centralizar
//os componentes e administrar o compartilhamento de informações por props;

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milk-shake",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function showProducts(userInput) {
    const result = products.filter(
      (product) =>
        product.name
          .toLocaleLowerCase()
          .includes(userInput.toLocaleLowerCase()) ||
        product.category
          .toLocaleLowerCase()
          .includes(userInput.toLocaleLowerCase())
    );
    setFilteredProducts(result);
  }

  function handleClick(productId) {
    const soldItem = products.find((product) => product.id === productId);

    if (!currentSale.includes(soldItem)) {
      setCurrentSale([...currentSale, soldItem]);
      setCartTotal(
        currentSale.reduce((a, b) => a + b.price, soldItem.price).toFixed(2)
      );
    }
  }

  function removeItem(productId, productPrice) {
    const newArr = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newArr);
    setCartTotal((cartTotal - productPrice).toFixed(2));
  }

  function removeAll(productId) {
    setCurrentSale([]);
    setCartTotal(0);
  }

  return (
    <div className="App">
      <Navbar showProducts={showProducts} />
      <div className="divContainer">
        {filteredProducts.length < 1 ? (
          <MenuContainer products={products} handleClick={handleClick} />
        ) : (
          <MenuContainer
            products={filteredProducts}
            handleClick={handleClick}
          />
        )}
        <ShoppingCart
          cartTotal={cartTotal}
          currentSale={currentSale}
          removeItem={removeItem}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
}

//Botão de remover itens da sacola

export default App;
