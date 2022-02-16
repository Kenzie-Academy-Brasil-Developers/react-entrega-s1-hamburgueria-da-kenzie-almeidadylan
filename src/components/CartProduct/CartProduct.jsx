function Cartproduct({ array, func }) {
  return (
    <div className="div-elemento-carrinho-de-compras">
      <img className="img-carrinho" src={array.img} />
      <div className="div-nome-produto">
        <h3 className="h3-elem-name">{array.name}</h3>
        <h5 className="h5-elem-category">{array.category}</h5>
      </div>
      <div className="div-btn-remover">
        <button
          className="btn-remover"
          onClick={() => {
            func(array.id);
          }}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
export default Cartproduct;
