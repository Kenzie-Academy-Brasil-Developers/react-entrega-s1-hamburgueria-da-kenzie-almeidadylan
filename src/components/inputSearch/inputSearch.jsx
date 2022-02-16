import { useState } from "react";

function InputSearch({ funcao }) {
  const [valueInput, setValueInput] = useState("");
  return (
    <div className="campo-de-busca">
      <input
        onChange={(event) => {
          funcao(event.target.value);
        }}
        type="text"
        className="barra-de-busca"
      />
      <button onClick={() => funcao(valueInput)} className="btn-pesquisar">
        Pesquisar
      </button>
    </div>
  );
}

export default InputSearch;
