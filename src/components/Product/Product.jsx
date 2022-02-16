function Product({ array, func }) {
  return (
    <li>
      <div className="produto">
        <div className="img-product-cardapio">
          <img className={array.name} src={array.img} alt={array.name} />
        </div>
        <h2>{array.name}</h2>
        <h5>{array.category}</h5>
        <h6>R$ {array.price.toFixed(2)}</h6>
        <button
          className="btn-adicionar-carrinho"
          id={array.id}
          onClick={() => {
            func(array.id);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
export default Product;
