import React from "react";
const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="4">Tabela de Livros</th>
        </tr>
        <tr>
            <th>ISBN</th>
            <th>Título
                <div className="container-setinhas">
                    <div onClick={ () => props.ordenarCrescente()}>&#11014;</div>
                    <div onClick={ () => props.ordenarDecrescente()}>&#11015;</div>
                </div>
            </th>
            <th>Author</th>
            <th></th>
        </tr>
    </thead>
);
export default TabelaHead;