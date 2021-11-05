import { render } from "@testing-library/react";
import "./App.css";
import MenuContainer from "./components/MenuContainer";
import Product from "./components/Product";
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
    //Responsável por filtrar (use o método filter)
    //e mostrar apenas os produtos com o mesmo texto escrito no input.
    const result = products.filter((product) => product.id === userInput);
    setFilteredProducts(result);
  }

  function handleClick(productId) {
    //Esta função deve receber por parâmetro o id e usar o método find para encontrar o
    //item no array com o mesmo id do produto e será responsável por adicionar o produto selecionado no state currentSale.
    //Crie um elemento JSX e use o método reduce para mostra o total da venda.

    setCurrentSale([...currentSale, productId]);

    const total = currentSale.reduce((a, b) => a.price + b.price, 0);

    setCartTotal(cartTotal + total);
  }

  return (
    <div className="App">
      {filteredProducts.length < 1 ? (
        <MenuContainer products={products} />
      ) : (
        <MenuContainer products={filteredProducts} />
      )}
    </div>
  );
}

// Pai diplay row
//nav
//pai da dos outros dois componentes
//ctálogo
//carrinho

export default App;

/*PERGUNTAS
1- Como passar parâmetros de uma função em JSX? ("() => ")
2 - Como passa props para um componente que está dentro de um outro component? (JÁ FIZ ISSO NOS DOIS COMPONENTS)
3 - É possível aplicar estilziação de forma automatizada pelo figma? (FAZER CLASSNAME E IR ESTILIZANDO)
4 - Como funciona a função render(), como aplicar JSX corretamente? (tanto faz render ou return)
5 - Devo chamar as callbacks através de const? (JÁ RESOLVIDO - CONST)
6 - Input do usuário será dado aonde? No header? (FAZER MENUNAV)
*/
