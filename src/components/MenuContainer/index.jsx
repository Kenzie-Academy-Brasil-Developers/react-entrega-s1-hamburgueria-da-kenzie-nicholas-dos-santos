import Product from "../Product";
import "./style.css";

function MenuContainer({ products, handleClick }) {
  return (
    <div className="Store">
      {products.map((product) => (
        <Product product={product} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default MenuContainer;
