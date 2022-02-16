import Product from "../Product/Product";
function Productslist({ lista, funcao }) {
  return (
    <ul>
      {lista.map((item, index) => (
        <Product key={index} array={item} func={funcao} />
      ))}
    </ul>
  );
}
export default Productslist;
