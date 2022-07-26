import React, { useState } from "react";


export default props => {

    const [tamanho, setTamanho] = useState("7")
    const [resultado, setResultado] = useState("0")

    function mudaTamanho(e) {
        setTamanho(e.target.value)
    }

    function geraNumeros() {
        return Math.floor(Math.random() * (61 - 1 + 1)) + 1
    }

    const geraResultado = () => {
        let array = []
        for (let i = 0; i < tamanho; i++) {
            array.push(geraNumeros())
        }
        var resultado = array.toString()
        setResultado(resultado)
    }


    return (
        <div>
            <div className="Input">
                <label for="input">Quantidade gerada: </label>
                <input id="input" value={tamanho} onChange={mudaTamanho} type="Number"></input>
            </div>
            <div className="Resultado">
                <button onClick={geraResultado}>Gerar números</button>
                <h3>Números Gerados: {resultado}</h3>
            </div>
        </div>
    )
}