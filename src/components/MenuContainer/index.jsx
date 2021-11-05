import Product from "../Product";
import "./style.css";
//Responsável por renderizar a lista de produtos;

function MenuContainer({ products }) {
  return (
    <div className="Store">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default MenuContainer;
