import Cartproduct from "../CartProduct/CartProduct";
import CartTotal from "../CartTotal/CartTotal";
function Cart({ lista, funcao, setCurrentSale, currentSale }) {
  if (lista.length > 0) {
    return (
      <div className="card-carrinho-de-compras">
        <div className="carrinho-de-compras">Carrinho de compras</div>
        <div className="produtos-carrinho">
          {lista.map((item, index) => (
            <Cartproduct key={index} array={item} func={funcao} />
          ))}
        </div>
        <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </div>
    );
  } else {
    return (
      <div className="card-carrinho-de-compras">
        <div className="carrinho-de-compras">Carrinho de compras</div>
        <div className="produtos-carrinho">
          <h2 className="sacola-vazia">Sua sacola está vazia</h2>
          <h3 className="add-itens">Adicione Itens</h3>
        </div>
      </div>
    );
  }
}
export default Cart;
