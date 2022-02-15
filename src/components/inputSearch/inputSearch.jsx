
function InputSearch({filteredProducts, setFilteredProducts ,funcao}){
    return (
    <form className='campo-de-busca'>
        <input 
            value={filteredProducts}
            onChange={(event) => {setFilteredProducts(event.target.value)}} 
            type='text' 
            className="barra-de-busca"
        />
        <button  className="btn-pesquisar">Pesquisar</button>
    </form>
)
}

export default InputSearch