function CartTotal({setCurrentSale, currentSale}) {
  return (
    <div className="container-total">
      <div className="card-total">
        <h3 className="h3-total">Total</h3>
        <span className="span-preco">R$ {currentSale.reduce((acu, valor) => acu += valor.price, 0).toFixed(2)}</span>
      </div>
      <button className="remover-todos" onClick={() => {setCurrentSale([])}}>Remover Todos</button>
    </div>
  );
}
export default CartTotal
