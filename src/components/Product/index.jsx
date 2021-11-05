//Responsável por apresentar as informações do produto:
//nome, categoria e preço, além de um button para adicionar ao carrinho.
import "./style.css";

function Product({ product, handleClick }) {
  return (
    <div className="item__box">
      <div className="img__box">
        <img src={product.img} />
      </div>
      <h2>{product.name}</h2>
      <span>{product.category}</span>
      <h3>R&#36; {product.price}</h3>
      <button className="btn" onClick={() => handleClick(product.id)}>
        Adicionar
      </button>
    </div>
  );
}

export default Product;
