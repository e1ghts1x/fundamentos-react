import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default props => {
    function getDados(){
        return produtos.map((produto, i) => {
            return(
                <tr className={i % 2 == 0 ? 'Par' : 'Impar'} key={produto.id} >
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div className="tabela">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>   
                    </tr>
                </thead>
                <tbody>
                    {getDados()}
                </tbody>
            </table>
        </div>
    )
}