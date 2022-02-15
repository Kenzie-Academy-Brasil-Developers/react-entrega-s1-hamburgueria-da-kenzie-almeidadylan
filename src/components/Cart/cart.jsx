import Cartproduct from "../CartProduct/CartProduct"
function Cart({lista, contador, setContador}){
    console.log(lista)
  // if(contador >= 1){
        return (
            <div className="card-carrinho-de-compras">
                {lista.map((item, index) => {
                    <div key={index}>
                        <p>{item.name}</p>
                        {console.log(item.name)}
                    <h4>oi</h4>
                    </div>
                })}
            </div>
        )
    //}
}
export default Cart