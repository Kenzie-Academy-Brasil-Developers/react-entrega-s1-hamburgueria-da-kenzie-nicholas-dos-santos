import "./style.css";

function ShoppingCart({ currentSale, cartTotal, removeItem, removeAll }) {
  return (
    <div className="shopping__div">
      <div className="shopping__div__title">
        <h2>Carrinho de compras</h2>
      </div>
      <div className="shopping__div__itens">
        {currentSale.length < 1 ? (
          <>
            <h3>Sua sacola está vazia</h3>
            <p className="p__add">Adiocione itens</p>
          </>
        ) : (
          <>
            <div className="productsSold">
              {currentSale.map((item) => (
                <div className="itemCard">
                  <div className="itemCard__box">
                    <div className="itemCard__img">
                      <img src={item.img} />
                    </div>
                    <div className="itemCard__info">
                      <h3>{item.name}</h3>
                      <span>{item.category}</span>
                    </div>
                  </div>
                  <span onClick={() => removeItem(item.id, item.price)}>
                    Remover
                  </span>
                </div>
              ))}
            </div>
            <button className="btn__removeAll" onClick={() => removeAll()}>
              Remover todos
            </button>
            <div className="shopTotal">
              <p className="total">Total:</p>
              <p className="total__value">R&#36;{cartTotal}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
