function Cartproduct({array}){
    return (
        <div className="div-elemento-carrinho-de-compras">
            <img className="img-carrinho" src={array.img}/>
            <div className="div-nome-produto">
                <h2 className="h2-elem-name">{array.name}</h2>
                <h5 className="h5-elem-category">{array.category}</h5>
            </div>
            <div className="div-btn-remover">
                <button className="btn-remover">Remover</button>
            </div>
        </div>
    )
}
export default Cartproduct